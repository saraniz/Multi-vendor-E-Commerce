// middleware/authenticate.js
const jwt = require('jsonwebtoken');
const User = require('../models/user'); // Import the User model

const authenticate = async (req, res, next) => {
    const token = req.headers['authorization']?.split(' ')[1]; // Extract token from "Bearer <token>"
    if (!token) {
        return res.status(403).json({ message: 'No token provided.' });
    }

    try {
        // Verify and decode the token
        const decoded = jwt.verify(token, 'your-secret-key'); // Replace with your actual secret key

        // Find the user by decoded ID
        const user = await User.findByPk(decoded.id); // Assuming Sequelize and primary key is `id`
        if (!user) {
            return res.status(404).json({ message: 'User not found.' });
        }
    
        // Attach the user to the request object
        req.user = user;
        next(); // Proceed to the next middleware or route handler
    } catch (error) {
        return res.status(401).json({ message: 'Failed to authenticate token.' });
    }
};

module.exports = authenticate;
