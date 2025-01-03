const express = require('express')
const {addItemToCart, updateCartItem, deleteCartItem,viewCart} = require('../controllers/cartController')
const authenticate = require('../middleware/authMiddleware')
const roleMiddleware = require('../middleware/roleMiddleware')

const router = express.Router()

router.post('/add', authenticate, addItemToCart)
router.put('/update/:id',authenticate,updateCartItem)
router.delete('/delete/:id',authenticate,deleteCartItem)
router.get('/',authenticate,viewCart)

module.exports = router 