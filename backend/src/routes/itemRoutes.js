const express = require('express');
const {searchItems, productDetails, getProductDetails, getAllProducts, addProduct, updateProduct} = require('../controller/itemController')
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
console.log('[itemRoutes] POST /addProducts called');
router.post("/addProducts", authenticate, async (req, res, next) => {
  console.log('[itemRoutes] Request body:', req.body);
  next();
}, addProduct)

console.log('[itemRoutes] PUT /product/update/:prisma_id called');
router.put("/product/update/:prisma_id", async (req, res, next) => {
  console.log('[itemRoutes] Update body:', req.body);
  next();
}, updateProduct);


module.exports = router;
