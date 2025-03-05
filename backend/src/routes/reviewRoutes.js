const express = require('express');
const router = express.Router();
const { submitReview, getReviews } = require('../controller/reviewController');
const authMiddleware = require('../middleware/authMiddleware');

// Submit review
router.post('/submitReview', authMiddleware, submitReview);

// Get reviews for a product
router.get('/getReviews/:product_id', getReviews);

module.exports = router;