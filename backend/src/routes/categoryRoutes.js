const express = require('express');
const {getPremiumProducts, getFrockProducts,  getTshirtProducts, getJeansProducts, getSkirtProducts } = require('../controller/categoryController');
const authenticate = require('../middleware/authMiddleware');
const roleMiddleware = require('../middleware/roleMiddleware'); // Ensure this middleware is used

const router = express.Router();

router.get('/frock', getFrockProducts);
router.get('/t-shirt', getTshirtProducts);
router.get('/jeans', getJeansProducts);
router.get('/skirt', getSkirtProducts);


router.get('/premium', getPremiumProducts); 

module.exports = router;