const express = require('express');
const { addItemToCart, updateCartItem, deleteCartItem, viewCart, removeFromCart } = require('../controller/cartController');
const authenticate = require('../middleware/authMiddleware');
const roleMiddleware = require('../middleware/roleMiddleware'); // Ensure this middleware is used

const router = express.Router();

router.post('/add', authenticate,addItemToCart);
router.put('/update/:id', authenticate, updateCartItem);
router.delete('/delete', authenticate, removeFromCart)
router.get('/viewCart', authenticate, viewCart);

module.exports = router;
