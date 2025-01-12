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
// const profile_image_upload = async (req, res) => {
//     const {id} = req;
//     const form = formidable({ multiples: false });
//     form.parse(req, async (err, _, files) => {
//         if (err) {
//             return res.status(400).json({ error: err.message });
//         }

//         // Configure Cloudinary
//         cloudinary.config({
//             cloud_name: process.env.CLOUD_NAME,
//             api_key: process.env.API_KEY,
//             api_secret: process.env.API_SECRET,
//             secure: true
//         });

//         try {
//             const { image } = files;

//             // Upload to Cloudinary
//             const result = await cloudinary.uploader.upload(image.filepath, { folder: 'profile' });

//             if (result) {
//                 // Update image URL in the database using Prisma
//                 // add image file to the data base 🔴
//                 const user = await prisma.user.update({
//                   where: { id: id },
//                   data: { image: result.url },
//                 });
        
//                 return res.status(201).json({
//                   message: 'Profile Image Uploaded Successfully',
//                   userInfo: user,
//                 });
//               } else {
//                 return res.status(404).json({ error: 'Image Upload Failed' });
//               }
            
//         } catch (error) {
//             return res.status(500).json({ error: error.message });
//         }
//     });
// }

// Export functions
module.exports = { registerUser, loginUser, admin_login, getUser , updateProfile }; 


