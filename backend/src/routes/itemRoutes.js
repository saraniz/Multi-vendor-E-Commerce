const express = require('express');
const {searchItems, productDetails, getProductDetails, getAllProducts} = require('../controller/itemController')
const router = express.Router();

// Route for searching items
router.post('/search', searchItems);

//route to fetch product details by product_id
router.get("/product/:product_id",getProductDetails)

//fecth all the products
router.get("/allproducts",getAllProducts)

module.exports = router;
