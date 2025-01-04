const express = require('express')
const {addProduct, updateProduct, deleteProduct, getSellerProduct} = require('../controllers/productController')
const authenticate = require('../middleware/authMiddleware')
const roleMiddleware = require('../middleware/roleMiddleware')

const router = express.Router()

router.post('/add', authenticate, roleMiddleware(['seller']), addProduct) //add product
router.put('/update/:id',authenticate,roleMiddleware(['seller']),updateProduct) //update product
router.delete('/delete/:id',authenticate,roleMiddleware(['seller']),deleteProduct) //delete product
router.get('/my-products',authenticate,roleMiddleware(['seller']),getSellerProduct)  //get seller products
// 👇👇 product image upload
//router.post('/product-image-update',authenticate, productController.productI)
router.post('/product-image-upload',authenticate, roleMiddleware(['seller']), addProductImg);