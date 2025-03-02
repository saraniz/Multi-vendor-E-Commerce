// controllers/authController.js
//const adminModel = require('../models/adminModel'); // Import Admin model
const { PrismaClient } = require('@prisma/client')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { use } = require('../routes/auth');
const cloudinary = require('cloudinary').v2
const formidable = require("formidable")



//initialize prismaClient
const prisma = new PrismaClient();


// Register User
const registerUser = async (req, res) => {
    try {
        const { fullName, username, email, password, mobileNo, gender, address } = req.body;
        
        //check if user already exist
        const userExist = await prisma.user.findUnique({
            where: {email},
        })

        if (userExist){
            return res.status(400).json('User already registered.')
        }
        
        //hash the password
        const hashedPassword = await bcrypt.hash(password,10)

        //create a new user
        const newUser = await prisma.user.create({
            data:{
                fullName,
                username,
                email,
                password: hashedPassword,
                mobileNo,
                gender,
                address,
                role: "Customer",
                isSeller: false,
            },
        })
        

        // Generate a JWT token
        const token = jwt.sign(
            { reg_id: newUser.reg_id, email: newUser.email, role: newUser.role },
            'your-secret-key', // Replace with your secret key
            { expiresIn: '1h' } // Token expiry time
        );

        // Return the token and user information
        return res.status(201).json({
            message: 'User registered successfully',
            user: newUser,
            jwt: token
        });
    } catch (error) {
        console.error("Error during the registration",error)
        return res.status(500).json({ error: error.message });
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
        const { store_name, business_email, business_regNo, mobile_no1, mobile_no2, business_address } = req.body;

        // Get the authenticated user's ID (assuming the user is logged in)
        const reg_id = req.user.reg_id;
        console.log("Regid:", reg_id, store_name, business_email, business_regNo, mobile_no1, mobile_no2, business_address);

        // Check if the user is already registered as a seller
        const existingSeller = await prisma.seller.findUnique({
            where: { reg_id },
        });

        if (existingSeller) {
            return res.status(400).json({ message: "User is already registered as a seller." });
        }

        // Check if the store details are already used
        const existingStore = await prisma.store.findFirst({
            where: {
                OR: [
                    { store_name: store_name },
                    { business_email: business_email },
                    { business_regNo: business_regNo },
                ],
            },
        });

        if (existingStore) {
            return res.status(400).json({ message: "Store details are already used. Try new details." });
        }

        // Create a new store
        const newStore = await prisma.store.create({
            data: {
                store_name:store_name,
                business_email:business_email,
                business_regNo:business_regNo,
                business_address:business_address,
            },
        });

        // Extract store ID
        const store_id = newStore.store_id;

        // Create a new seller entry with reg_id and store_id
        const newSeller = await prisma.seller.create({
            data: {
                reg_id:reg_id,
                store_id:store_id,
                mobile_no1:mobile_no1,
                mobile_no2:mobile_no2,
            },
        });

        // Update the user's role and seller status
        await prisma.user.update({
            where: { reg_id },
            data: { role: "Seller", isSeller: true },
        });

        return res.status(201).json({
            message: "Seller registered successfully",
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
        const user = await prisma.user.findUnique({
            where: { reg_id: req.user.reg_id },
        });

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        return res.status(200).json({ user });
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









// Export functions
module.exports = { registerUser, loginUser, admin_login, getUser , updateProfile, profile_image_upload,registerSeller }; 


