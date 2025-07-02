const express = require('express');
const router = express.Router();
const { testOrderCreate } = require('../controller/testOrderController');

// Test route to check order table connectivity
router.get('/test-order', testOrderCreate);

module.exports = router;
