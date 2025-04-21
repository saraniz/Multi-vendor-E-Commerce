const express = require('express');
const router = express.Router();
const { followStore, fetchFollowedShops } = require('../controller/followController');
const authenticate = require('../middleware/authMiddleware');

// POST: Follow a store (requires authentication)
router.post('/followStore', authenticate, followStore); // Only logged-in users can follow

// GET: Fetch followed stores (requires authentication)
router.get('/fetchfollowedstores', authenticate, fetchFollowedShops);

module.exports = router;
