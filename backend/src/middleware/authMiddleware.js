const jwt = require('jsonwebtoken');

// Example authentication middleware
const authenticate = (req, res, next) => {
    const token = req.headers['authorization'];
    if (!token) {
        return res.status(403).json({ message: 'No token provided.' });
    }

    jwt.verify(token, 'your-secret-key', (err, decoded) => { // Replace with your secret key
        if (err) {
            return res.status(401).json({ message: 'Failed to authenticate token.' });
        }
        req.userId = decoded.id; // Attach decoded user ID to the request
        next();
    });
};

module.exports = authenticate;
