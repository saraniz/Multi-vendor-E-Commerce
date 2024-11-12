// routes/auth.js
const express = require('express');
const { registerUser, loginUser } = require('../controller/authController'); // Correct import path
const roleMiddleware = require('../middleware/roleMiddleware')


const router = express.Router(); // Declare the router here

// Define your routes
router.post('/register', registerUser); // Handle registration
router.post('/login', loginUser); // Handle login

// Export the router
module.exports = router; // Make sure this line is at the end of the file