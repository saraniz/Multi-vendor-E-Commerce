const express = require("express");
const router = express.Router();
const { getStoreById, getproductsById } = require("../controller/storeController");

router.get("/fetchstore/:store_id", getStoreById);

router.get("/fetchproducts/:store_id",getproductsById)

module.exports = router;
