const express = require('express');
const {searchItems} = require('../controller/itemController')
const router = express.Router();

// Route for searching items
router.post('/search', searchItems);

module.exports = router;
