require('dotenv').config();

// controllers/authController.js
//const adminModel = require('../models/adminModel'); // Import Admin model
// const { PrismaClient } = require('@prisma/client')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { use } = require('../routes/auth');
const cloudinary = require('cloudinary').v2
const formidable = require("formidable")
const prisma = require("../../config/database.js");
const UserMongo = require('../models/user.js'); // Mongoose User model
const SellerMongo = require('../models/seller.js'); // Mongoose Seller model
const StoreMongo = require('../models/store.js');   // Mongoose Store model
const crypto = require('crypto');
const nodemailer = require('nodemailer');



//initialize prismaClient
// const prisma = new PrismaClient();


// Register User
const registerUser = async (req, res) => {
  try {
    const { fullName, username, email, password, mobileNo, gender, address, profileImage } = req.body;

    // Basic validation
    if (!fullName || !username || !email || !password || !mobileNo || !gender || !address) {
      return res.status(400).json({ message: 'All fields are required.' });
    }

    // 1. Check if user already exists in Supabase (PostgreSQL)
    const userExist = await prisma.user.findUnique({ where: { email } });
    if (userExist) {
      console.log("User already exists:", email);
      return res.status(400).json({ message: 'User already registered with this email.' });
    }

    // 2. Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // 3. Save to Supabase via Prisma (do NOT include profileImage)
    const newUser = await prisma.user.create({
      data: {
        fullName,
        username,
        email,
        password: hashedPassword,
        mobileNo,
        gender,
        address,
        role: "customer",
        isSeller: false,
        // profileImage removed from Prisma
      },
    });

    console.log("User created in Supabase:", newUser.email);

    // 4. Save to MongoDB via Mongoose with reg_id included (include profileImage)
    const mongoUser = new UserMongo({
      reg_id: newUser.reg_id,   // <-- add this line
      fullName,
      username,
      email,
      password: hashedPassword,
      mobileNo,
      gender,
      address,
      role: "customer",
      isSeller: false,
      profileImage: profileImage || null,
    });

    await mongoUser.save();
    console.log("User created in MongoDB:", mongoUser.email);

    // 5. Generate JWT token
    const token = jwt.sign(
      {
        reg_id: newUser.reg_id,
        email: newUser.email,
        role: newUser.role,
      },
      process.env.JWT_SECRET || 'your-secret-key',
      { expiresIn: '1h' }
    );

    // 6. Return response (include profileImage from mongoUser)
    return res.status(201).json({
      message: 'User registered successfully in both databases',
      user: {
        reg_id: newUser.reg_id,
        fullName: newUser.fullName,
        username: newUser.username,
        email: newUser.email,
        role: newUser.role,
        isSeller: newUser.isSeller,
        profileImage: mongoUser.profileImage || null,
      },
      jwt: token,
    });

  } catch (error) {
    console.error("Registration error:", error.message);
    return res.status(500).json({ message: 'Internal Server Error. Please try again later.' });
  }
};


// User login
const loginUser = async (req, res) => {
    const { username, password } = req.body;
    try {
        const user = await prisma.user.findUnique({
            where: {username},
        })

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (isMatch) {
            // Generate JWT token for login
            const token = jwt.sign(
                { reg_id: user.reg_id, email: user.email, role: user.role },
                'your-secret-key', // Replace with your secret key
                { expiresIn: '1h' }
            );

            return res.status(200).json({ message: 'Login successful', jwt: token });
        } else {
            return res.status(400).json({ message: 'Incorrect password' });
        }
    } catch (error) {
        console.error('Error during login:', error);
        res.status(500).json({ error: error.message });
    }
};

// Seller registration
// const registerSeller = async (req, res) => {
//     try {
//         const { store_name, business_email, business_regNo, mobile_no1, mobile_no2, business_address } = req.body;

//         // Get the authenticated user's ID (assuming the user is logged in)
//         const reg_id = req.user.reg_id;
//         console.log("Regid:",reg_id,store_name, business_email, business_regNo, mobile_no1, mobile_no2, business_address)
//         // Check if the user is already registered as a seller
//         const existingSeller = await prisma.seller.findUnique({
//             where: { reg_id },
//         });

//         if (existingSeller) {
//             return res.status(400).json({ message: "User is already registered as a seller." });
//         }

//         // Check if the store details are already used
//         const existingStore = await prisma.store.findMany({
//             where: {
//                 OR: [
//                     { store_name:store_name },
//                     { business_email:business_email },
//                     { business_regNo:business_regNo },
//                 ],
//             },
//         });

//         if (existingStore) {
//             return res.status(400).json({ message: "Store details are already used. Try new details." });
//         }

//         // Create a new store
//         const newStore = await prisma.store.create({
//             data: {
//                 store_name,
//                 business_email,
//                 business_regNo,
//                 business_address,
//             },
//         });

//         // Extract store ID
//         const store_id = newStore.store_id;

//         // Create a new seller entry with reg_id and store_id
//         const newSeller = await prisma.seller.create({
//             data: {
//                 reg_id,
//                 store_id,
//                 mobile_no1,
//                 mobile_no2,
//             },
//         });

//         // Update the user's role and seller status
//         await prisma.user.update({
//             where: { reg_id },
//             data: { role: "Seller", isSeller: true },
//         });

//         return res.status(201).json({
//             message: "Seller registered successfully",
//             seller: newSeller,
//         });
//     } catch (error) {
//         console.error("Error during seller registration:", error);
//         return res.status(500).json({ error: error.message });
//     }
// };


const registerSeller = async (req, res) => {
  try {
    const {
      store_name,
      business_email,
      business_regNo,
      mobile_no1,
      mobile_no2,
      business_address,
      store_image, // base64 string
    } = req.body;

    const reg_id = req.user.reg_id; // Supabase user ID
    const userEmail = req.user.email; // User email from auth token/session

    // 1. Check if user is already a seller (Supabase)
    const existingSeller = await prisma.seller.findUnique({ where: { reg_id } });
    if (existingSeller) {
      return res.status(400).json({ message: "User is already registered as a seller." });
    }

    // 2. Check if store details already exist
    const existingStore = await prisma.store.findFirst({
      where: {
        OR: [
          { store_name },
          { business_email },
          { business_regNo }
        ],
      },
    });
    if (existingStore) {
      return res.status(400).json({ message: "Store details are already used. Try new details." });
    }

    // 3. Create store in Supabase (PostgreSQL)
    const newStore = await prisma.store.create({
      data: {
        store_name,
        business_email,
        business_regNo,
        business_address,
        ...(store_image ? { store_image } : {}),
      },
    });

    // 4. Create store in MongoDB
    const newStoreMongo = new StoreMongo({
      store_name,
      business_email,
      business_regNo,
      business_address,
      store_image: store_image || '',
    });
    await newStoreMongo.save();

    // 5. Create seller in Supabase
    const newSeller = await prisma.seller.create({
      data: {
        reg_id,
        store_id: newStore.store_id,
        mobile_no1,
        mobile_no2,
      },
    });

    // 6. Update user role and isSeller flag in Supabase
    await prisma.user.update({
      where: { reg_id },
      data: { role: "Seller", isSeller: true },
    });

    // 7. Find corresponding MongoDB user by email (not reg_id)
    const mongoUser = await UserMongo.findOne({ email: userEmail });

    if (!mongoUser) {
      return res.status(404).json({ message: "User not found in MongoDB for email: " + userEmail });
    }

    // 8. Update MongoDB user isSeller flag to true
    await UserMongo.updateOne(
      { email: userEmail },
      { $set: { isSeller: true } }
    );

    // 9. Create seller in MongoDB
    const sellerMongoDoc = new SellerMongo({
      mobile_no1,
      mobile_no2,
      reg_id: mongoUser._id, // MongoDB ObjectId reference
      store_id: newStoreMongo._id,
      isBlocked: false,
    });

    await sellerMongoDoc.save();

    return res.status(201).json({
      message: "Seller registered successfully in both databases",
      seller: newSeller,
    });

  } catch (error) {
    console.error("Error during seller registration:", error);
    return res.status(500).json({ error: error.message });
  }
};

// Admin login
const admin_login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const admin = await prisma.admin.findUnique({
            where: {email},
        })

        if (admin) {
            const match = await bcrypt.compare(password, admin.password);
            if (match) {
                return res.status(200).json({ message: 'Login successful' });
            } else {
                return res.status(401).json({ message: 'Incorrect password' });
            }
        } else {
            return res.status(401).json({ message: 'Admin email not found' });
        }
    } catch (error) {
        console.error('Error during admin login:', error);
        res.status(500).json({ error: error.message });
    }
};

// Get User Details
const getUser = async (req, res) => {
    try {
        // Fetch from Prisma (PostgreSQL)
        const user = await prisma.user.findUnique({
            where: { reg_id: req.user.reg_id },
        });

        // Fetch from MongoDB using reg_id
        const mongoUser = await UserMongo.findOne({ reg_id: req.user.reg_id });

        if (!user && !mongoUser) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Merge user info, prefer MongoDB fields for profileImage
        const mergedUser = {
            reg_id: user?.reg_id || mongoUser?.reg_id,
            fullName: user?.fullName || mongoUser?.fullName,
            username: user?.username || mongoUser?.username,
            email: user?.email || mongoUser?.email,
            role: user?.role || mongoUser?.role,
            isSeller: user?.isSeller ?? mongoUser?.isSeller,
            profileImage: mongoUser?.profileImage || null,
            // add other fields as needed
        };

        return res.status(200).json({ user: mergedUser });
    } catch (error) {
        console.error('Error fetching user details:', error);
        res.status(500).json({ error: error.message });
    }
};


// Controller to update the profile
const updateProfile = async (req, res) => {
    try {
      const { fullName, profilePicture, teleNumber, address } = req.body;
        console.log(fullName, profilePicture, teleNumber, address )
      
      const updatedUser = await prisma.user.update({
        where: {
          reg_id: req.user.reg_id,
        },
        data: {
          fullName: fullName || undefined,
          profilePicture: profilePicture || undefined,
          teleNumber: teleNumber || undefined,
          address: address || undefined,
        },
      });
  
      return res.status(200).json({ message: 'Profile updated successfully!', user: updatedUser });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Failed to update profile. Please try again later.' });
    }
  };

// Profile Image Upload ⭕
const profile_image_upload = async (req, res) => {
    const {id} = req;
    const form = formidable({ multiples: false });
    form.parse(req, async (err, _, files) => {
        if (err) {
            return res.status(400).json({ error: err.message });
        }

        // Configure Cloudinary
        cloudinary.config({
            cloud_name: process.env.CLOUD_NAME,
            api_key: process.env.API_KEY,
            api_secret: process.env.API_SECRET,
            secure: true
        });

        try {
            const { image } = files;

            // Upload to Cloudinary
            const result = await cloudinary.uploader.upload(image.filepath, { folder: 'profile' });

            if (result) {
                // Update image URL in Supabase
                const { error } = await supabase
                    .from('User')      
                    .update({ image: result.url })   //🔴🔴 <--- we need to add image field and set it into String
                    .eq('id', id);

                if (error) {
                    throw new Error(error.message);
                }
                // feetch data
                const { data, error: fetchError } = await supabase
                    .from('User')
                    .select('*')
                    .eq('id', id)
                    .single();

                if (fetchError) {
                    throw new Error(fetchError.message);
                }

                return res.status(201).json({
                    message: 'Profile Image Uploaded Successfully',
                    userInfo: data
                });
            } else {
                return res.status(404).json({ error: 'Image Upload Failed' });
            }
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    });
}

const forgotPassword = async (req, res) => {
  const { email } = req.body;
  console.log("📩 Forgot password requested for:", email);

  try {
    // 1. Check user in PostgreSQL (Supabase via Prisma)
    const pgUser = await prisma.user.findUnique({ where: { email } });

    // 2. Check user in MongoDB
    const mongoUser = await UserMongo.findOne({ email });

    if (!pgUser || !mongoUser) {
      console.log("⚠️ User not found in one or both databases for email:", email);
      return res.status(404).json({ message: "User not found with that email." });
    }

    // 3. Generate token and expiry
    const token = crypto.randomBytes(32).toString("hex");
    const tokenExpire = Date.now() + 3600000; // 1 hour from now

    // 4. Save token in MongoDB
    await UserMongo.updateOne(
      { email },
      {
        $set: {
          resetToken: token,
          resetTokenExpire: tokenExpire,
        },
      }
    );

    // 5. Send reset email with Nodemailer
    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const resetLink = `${process.env.FRONTEND_URL}/reset-password/${token}`;

    await transporter.sendMail({
      from: `"Kloset Support" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "Password Reset Request",
      html: `
        <h3>Hello ${pgUser.fullName || mongoUser.fullName},</h3>
        <p>You requested to reset your password. Click the link below:</p>
        <a href="${resetLink}">${resetLink}</a>
        <p>This link expires in 1 hour.</p>
      `,
    });

    console.log("✅ Password reset email sent to:", email);
    return res.status(200).json({ message: "Password reset email sent successfully." });

  } catch (error) {
    console.error("❌ Error in forgotPassword:", error.message);
    return res.status(500).json({ message: "Failed to process forgot password." });
  }
};










// Export functions
module.exports = { registerUser, loginUser, admin_login, getUser , updateProfile, profile_image_upload,registerSeller,forgotPassword };


