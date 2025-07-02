const express = require("express");
const router = express.Router();
const { getStoreById, getproductsById, getSellerProducts, getOrdersForSeller, cancelOrderBySeller, getSellerStoreDetails, updateSellerStoreDetails } = require("../controller/storeController");
const authenticate = require("../middleware/authMiddleware");

router.get("/fetchstore/:store_id", getStoreById);

router.get("/fetchproducts/:store_id",getproductsById)

router.get("/fetchstoreproducts",authenticate,getSellerProducts);

router.get("/getordersforstore",authenticate,getOrdersForSeller)

router.put('/cancel/:orderId', cancelOrderBySeller);

router.get("/storedetails",authenticate,getSellerStoreDetails)

router.put("/update", authenticate, updateSellerStoreDetails);

module.exports = router;
