// routes/auth.js
const express = require('express');

//const { registerUser, loginUser, admin_login, getUser } = require('../controller/authController'); // Correct import path

const { registerUser, loginUser, admin_login, getUser, updateProfile , profile_image_upload} = require('../controller/authController'); // Correct import path

const roleMiddleware = require('../middleware/roleMiddleware');
const authenticate = require('../middleware/authMiddleware');


const router = express.Router(); // Declare the router here

// Define your routes
router.post('/register', registerUser); // Handle registration
router.post('/login', loginUser); // Handle login
router.get('/user', authenticate, getUser);
router.put('/update',authenticate,updateProfile)

router.post('/admin-login', admin_login); // Handle admin login(🟢)

// profile image upload  🔴
router.post('/profile-image-upload',authenticate, profile_image_upload);


// Export the router
module.exports = router; // Make sure this line is at the end of the file