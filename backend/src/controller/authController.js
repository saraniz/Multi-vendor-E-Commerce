// controllers/authController.js
// const adminModel = require('../models/adminModel'); // Import Admin model
const { PrismaClient } = require('@prisma/client')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


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
            { id: newUser.id, email: newUser.email, role: newUser.role },
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
                { id: user.id, email: user.email, role: user.role },
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
            where: { id: req.user.id },
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

// Export functions
module.exports = { registerUser, loginUser, admin_login, getUser };
