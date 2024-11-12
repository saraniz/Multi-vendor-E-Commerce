// controllers/authController.js
const User = require('../models/user'); // Import User model
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')

const registerUser = (User, bcrypt, jwt) => async (req, res) => {
    console.log("Request Body:", req.body);
    try {
        const userExist = await User.findOne({ where: { email: req.body.email } });
        if (userExist) {
            return res.status(400).json({ message: 'User already registered.' });
        }

        const { firstName, lastName, username, email, password } = req.body;

        const newUser = await User.create({
            firstName,
            lastName,
            username,
            email,
            password,
            role:"customer",
            isSeller: false,
        });

        //generate a JWT token
        const token = jwt.sign(
            { id: newUser.id, email:newUser.email, role:newUser.role},
            'your-secret-key', //replace with our secret key
            {expiresIn: '1h'} //set the token expiry time
        )

        //return the token and user information
        return res.status(201).json({
            message: 'User registered Successfully',
            user: newUser,
            token: token
        })

    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

const loginUser = (User, bcrypt) => async (req, res) => {
    const { username, password } = req.body;
    try {
        const user = await User.findOne({ where: { username } });
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (isMatch) {
            return res.status(200).json({ message: 'Login successful' });
        } else {
            return res.status(400).json({ message: 'Incorrect password' });
        }
    } catch (error) {
        console.error('Error during login:', error);
        res.status(500).json({ error: error.message });
    }
};



// Exporting the functions
module.exports = { registerUser, loginUser };