// const { PrismaClient } = require('@prisma/client');
// const prisma = new PrismaClient();
const prisma = require("../../config/database.js");
const Seller = require('../models/seller');
const Product = require('../models/product');
const User = require('../models/user');
const Order = require('../models/order.js');
const StoreMongo = require('../models/store');

// GET store by ID with its products
const getStoreById = async (req, res) => {
  // 1. Parse and Validate the store_id
  const store_id = req.params.store_id;

  // Log request parameters to ensure store_id is passed correctly
  console.log("Route Params:", req.params);  // Debug: Check the value and type

  if (!store_id || isNaN(store_id)) {
    console.error("Invalid store_id. req.params:", req.params); // Log error if invalid store_id
    return res.status(400).json({ error: "Invalid store_id. Must be a number." });
  }

  const parsedStoreId = parseInt(store_id, 10);  // Parse it explicitly with base 10
  console.log("Parsed store_id:", parsedStoreId);  // Debug: Check the parsed value

  try {
    // 2. Fetch the store using prisma.store.findUnique
    const store = await prisma.store.findUnique({
      where: {
        store_id: parsedStoreId, // Use the parsed store_id
      },
      include: {
        products: true, // Fetch associated products
      },
    });

    // 3. Handle the case where the store is not found
    if (!store) {
      return res.status(404).json({ error: "Store not found" });
    }

    // 4. Send the store data in the response
    res.status(200).json(store);
  } catch (error) {
    // 5. Handle errors during the Prisma operation
    console.error("Error fetching store:", error);
    return res.status(500).json({ error: error.message || "Server error" }); // Send the error message
  }
};

// Fetch products by storeId
const getproductsById = async (req, res) => {
  const storeId = parseInt(req.params.store_id);

  try {
    // Query the products from the database using Prisma
    const products = await prisma.product.findMany({
      where: { store_id:storeId },
    });
    console.log("Fetched products form db:", products);// Log the products to ensure they are being fetched

    // Send the products in the response
    res.json({ products });
  } catch (error) {
    console.error('Error fetching products:', error);
    res.status(500).json({ error: 'Failed to fetch products' });
  }
};

const getSellerProducts = async (req, res) => {
  try {
    // 1. Get reg_id from token (set by authMiddleware)
    const reg_id = req.user?.reg_id;
    console.log("getSellerProducts - reg_id:", reg_id); // Debug: Log the reg_id
    if (!reg_id) {
      return res.status(401).json({ success: false, message: "Unauthorized: Missing reg_id" });
    }

    // 2. Find the user by reg_id (Number)
    const user = await User.findOne({ reg_id: Number(reg_id) });
    if (!user) {
      return res.status(404).json({ success: false, message: "User not found" });
    }

    // 3. Find the seller by user._id (Seller.reg_id is ObjectId)
    const seller = await Seller.findOne({ reg_id: user._id });
    if (!seller) {
      return res.status(404).json({ success: false, message: "Seller profile not found" });
    }

    // 4. Get store_id from seller
    const store_id = seller.store_id;
    if (!store_id) {
      return res.status(404).json({ success: false, message: "Store not found for seller" });
    }

    // 5. Fetch all products for this store
    const products = await Product.find({ store_id });

    // 6. Return product details
    return res.status(200).json({ success: true, products });
  } catch (error) {
    console.error("[getSellerProducts] Error:", error);
    return res.status(500).json({ success: false, message: error.message || "Internal server error" });
  }
};

const getOrdersForSeller = async (req, res) => {
  try {
    const reg_id = req.user.reg_id;
    if (!reg_id) {
      return res.status(401).json({ success: false, message: 'Unauthorized: No reg_id found' });
    }

    const user = await User.findOne({ reg_id: Number(reg_id) });
    if (!user) {
      return res.status(404).json({ success: false, message: 'User not found' });
    }

    const seller = await Seller.findOne({ reg_id: user._id });
    if (!seller) {
      return res.status(404).json({ success: false, message: 'Seller not found' });
    }

    const storeId = seller.store_id;
    if (!storeId) {
      return res.status(404).json({ success: false, message: 'Store not found for seller' });
    }

    // Fetch orders and populate product category & name, and user info
    const orders = await Order.find({ store_id: storeId })
      .sort({ order_date: -1 })
      .populate({
        path: 'reg_id',
        select: 'fullName address mobileNo',
      })
      .populate({
        path: 'product_id',
        select: 'name category',
      });

    // Count orders by status
    let shipped = 0, pending = 0, newOrders = 0;
    orders.forEach(order => {
      if (order.status === 'shipped') shipped++;
      else if (order.status === 'delivered') pending++;
      else if (order.status === 'processing') newOrders++;
    });

    // Aggregate sales by category (using product.category)
    const categorySales = {};
    orders.forEach(order => {
      const category = order.product_id?.category || 'Unknown';
      categorySales[category] = (categorySales[category] || 0) + order.quantity;
    });

    // Aggregate monthly revenue by summing order.price (from order schema) grouped by month YYYY-MM
    const monthlyRevenueMap = {};
    orders.forEach(order => {
      const date = order.order_date || new Date();
      const month = date.toISOString().slice(0, 7); // "YYYY-MM"
      const price = order.price || 0;  // Use price from order schema

      if (!monthlyRevenueMap[month]) monthlyRevenueMap[month] = 0;
      monthlyRevenueMap[month] += price;
    });

    return res.status(200).json({
      success: true,
      orders,
      counts: { shipped, pending, new: newOrders },
      categorySales,
      monthlyRevenue: monthlyRevenueMap,
    });
  } catch (error) {
    console.error('Error in getOrdersForSeller:', error);
    return res.status(500).json({ success: false, message: 'Server error' });
  }
};

const cancelOrderBySeller = async (req, res) => {
  try {
    const orderId = req.params.orderId;

    // Find the order
    const order = await Order.findById(orderId).populate('reg_id');

    if (!order) {
      return res.status(404).json({ message: 'Order not found.' });
    }

    // Update the status
    order.status = 'cancelled';
    await order.save();

    // Simulate notification to the user
    console.log(`📢 Notify User: Order for ${order.guest_name || order.reg_id.name} has been cancelled by the seller.`);

    // Respond with updated order
    res.status(200).json({
      message: 'Order cancelled successfully.',
      updatedOrder: order
    });
  } catch (error) {
    console.error('❌ Error cancelling order:', error);
    res.status(500).json({ message: 'Internal server error.' });
  }
};

const getSellerStoreDetails = async (req, res) => {
  try {
    // 1. Extract reg_id from authenticated user (token)
    const reg_id = req.user?.reg_id;
    console.log('[getSellerStoreDetails] reg_id:', reg_id);
    if (!reg_id) return res.status(401).json({ message: 'Unauthorized: Missing reg_id' });

    // 2. Find the user by reg_id (Number)
    const user = await User.findOne({ reg_id: Number(reg_id) });
    console.log('[getSellerStoreDetails] user:', user);
    if (!user) return res.status(404).json({ message: 'User not found' });

    // 3. Find the seller by user._id (Seller.reg_id is ObjectId)
    const seller = await Seller.findOne({ reg_id: user._id }).exec();
    console.log('[getSellerStoreDetails] seller:', seller);
    if (!seller) return res.status(404).json({ message: 'Seller not found' });

    // 4. Get store from MongoDB by ObjectId
    const storeMongo = await StoreMongo.findById(seller.store_id).lean();
    console.log('[getSellerStoreDetails] storeMongo:', storeMongo);
    if (!storeMongo) return res.status(404).json({ message: 'Store not found in MongoDB' });

    // 5. Get store from Supabase/PostgreSQL by store_id_pg (if available)
    let storePG = null;
    if (seller.store_id_pg) {
      storePG = await prisma.store.findUnique({
        where: { store_id: seller.store_id_pg },
      });
      console.log('[getSellerStoreDetails] storePG:', storePG);
    }

    // 6. Return combined store info
    return res.json({
      storeDetails: {
        ...(storePG || {}), // PostgreSQL structured data if available
        ...storeMongo,      // Mongo data (overrides PG if same fields)
      },
    });
  } catch (error) {
    console.error('Error fetching store details:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
};

const updateSellerStoreDetails = async (req, res) => {
  try {
    // 1. Extract reg_id from authenticated user (token)
    const reg_id = req.user?.reg_id;
    if (!reg_id) return res.status(401).json({ message: 'Unauthorized: Missing reg_id' });

    // 2. Find the user by reg_id (Number)
    const user = await User.findOne({ reg_id: Number(reg_id) });
    if (!user) return res.status(404).json({ message: 'User not found' });

    // 3. Find the seller by user._id (Seller.reg_id is ObjectId)
    const seller = await Seller.findOne({ reg_id: user._id }).exec();
    if (!seller) return res.status(404).json({ message: 'Seller not found' });

    // 4. Update store in MongoDB
    const mongoUpdate = {};
    if (req.body.store_name) mongoUpdate.store_name = req.body.store_name;
    if (req.body.business_email) mongoUpdate.business_email = req.body.business_email;
    if (req.body.business_regNo) mongoUpdate.business_regNo = req.body.business_regNo;
    if (req.body.business_address) mongoUpdate.business_address = req.body.business_address;
    if (req.body.store_image) mongoUpdate.store_image = req.body.store_image;

    const storeMongo = await StoreMongo.findByIdAndUpdate(
      seller.store_id,
      { $set: mongoUpdate },
      { new: true }
    ).lean();
    if (!storeMongo) return res.status(404).json({ message: 'Store not found in MongoDB' });

    // 5. Update store in PostgreSQL (if available)
    let storePG = null;
    if (seller.store_id_pg) {
      storePG = await prisma.store.update({
        where: { store_id: seller.store_id_pg },
        data: {
          store_name: req.body.store_name,
          business_email: req.body.business_email,
          business_regNo: req.body.business_regNo,
          business_address: req.body.business_address,
          store_image: req.body.store_image,
        },
      });
    }

    // 6. Return updated store info
    return res.json({
      message: 'Store updated successfully',
      storeDetails: {
        ...(storePG || {}),
        ...storeMongo,
      },
    });
  } catch (error) {
    console.error('Error updating store details:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
};


module.exports = {
  getStoreById, getproductsById,getSellerProducts,getOrdersForSeller,cancelOrderBySeller,getSellerStoreDetails,updateSellerStoreDetails,
};
