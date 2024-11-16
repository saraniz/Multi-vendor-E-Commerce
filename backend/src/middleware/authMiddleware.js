const jwt = require('jsonwebtoken');
const { PrismaClient } = require('@prisma/client'); // Import PrismaClient
const prisma = new PrismaClient(); // Instantiate Prisma client

const authenticate = async (req, res, next) => {
    const token = req.headers['authorization']?.split(' ')[1]; // Extract token from "Bearer <token>"
    
    if (!token) {
        return res.status(403).json({ message: 'No token provided.' });
    }

    try {
        // Verify and decode the token
        const decoded = jwt.verify(token, 'your-secret-key'); // Replace with your actual secret key

        // Find the user by decoded ID
        const user = await prisma.user.findUnique({
            where: {
                id: decoded.id, // Assuming 'id' is the primary key
            },
        });

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
