// controllers/authController.js
const User = require('../models/user'); // Import User model
const adminModel = require('../models/adminModel'); // Import Admin model
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// Register User
const registerUser = async (req, res) => {
    try {
        const userExist = await User.findOne({ where: { email: req.body.email } });
        if (userExist) {
            return res.status(400).json({ message: 'User already registered.' });
        }

        const { fullName, username, email, password, mobileNo, gender, address } = req.body;

        const newUser = await User.create({
            fullName,
            username,
            email,
            password: await bcrypt.hash(password, 10),
            mobileNo,
            gender,
            address,
            role: "customer",
            isSeller: false,
        });

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
        return res.status(500).json({ error: error.message });
    }
};

// User login
const loginUser = async (req, res) => {
    const { username, password } = req.body;
    try {
        const user = await User.findOne({ where: { username } });
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
        const admin = await adminModel.findOne({ email }).select('+password');
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
        // Return the user details from the request object (attached by middleware)
        return res.status(200).json({ user: req.user });
    } catch (error) {
        console.error('Error fetching user details:', error);
        res.status(500).json({ error: error.message });
    }
};

// Export functions
module.exports = { registerUser, loginUser, admin_login, getUser };
