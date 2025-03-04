const express = require('express');
const {searchItems, productDetails, getProductDetails, getAllProducts, addProduct} = require('../controller/itemController')
const router = express.Router();
const authenticate = require('../middleware/authMiddleware')
// const upload = require ('../middleware/upload')

// Route for searching items
router.post('/search', searchItems);

//route to fetch product details by product_id
router.get("/product/:product_id",getProductDetails)

//fecth all the products
router.get("/allproducts",getAllProducts)

//add products
// router.post("/addProducts",authenticate, upload.array("product_images"),addProduct)
router.post("/addProducts",authenticate,addProduct)


module.exports = router;
