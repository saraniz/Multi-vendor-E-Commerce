const prisma = require("../../config/database");
const mongoose = require('mongoose');

const Order = require('../models/order');
// const OrderItem = require('../models/orderItem'); // Removed
const User = require("../models/user")
const Product = require('../models/product');
const Seller = require('../models/seller');



console.log("Available Prisma models:", Object.keys(prisma).filter(key => 
  typeof prisma[key] === 'object' && 
  prisma[key] !== null && 
  !key.startsWith('$') && 
  !key.startsWith('_')
));

// Unified order placement function (works for both registered and guest users)
const placeOrder = async (req, res) => {
  try {
    const {
      guest_name,
      guest_mobile,
      guest_address,
      total_price,
      courier_service,
      deliver_date,
      cartItems,
    } = req.body;

    const reg_id = req.user?.reg_id || null;
    console.log("REGID: ", reg_id);

    if (
      total_price == null ||
      !courier_service ||
      !deliver_date ||
      !Array.isArray(cartItems) ||
      cartItems.length === 0
    ) {
      return res.status(400).json({
        success: false,
        message: "Missing required order fields.",
      });
    }

    let mongoUser = null;
    if (reg_id) {
      mongoUser = await User.findOne({ reg_id: Number(reg_id) });
      if (!mongoUser) {
        return res.status(404).json({ success: false, message: "User not found in MongoDB." });
      }
    } else {
      if (!guest_name || !guest_mobile || !guest_address) {
        return res.status(400).json({
          success: false,
          message: "Guest name, mobile, and address are required for guest checkout.",
        });
      }
    }

    const createdOrders = [];

    const shippingDays = {
      "DHL Express": 2,
      "CityPak Lanka": 4,
      "Domex": 6,
    };

    for (const item of cartItems) {
      let productId;
      if (reg_id) {
        // Registered user: resolve productId from Prisma cart
        const cartId = item.product_id;
        const prismaCartItem = await prisma.cart.findUnique({
          where: { cart_id: Number(cartId) },
        });
        if (prismaCartItem && prismaCartItem.product_id) {
          productId = prismaCartItem.product_id;
        } else {
          throw new Error(`Could not resolve product_id from cart_id: ${cartId}`);
        }
      } else {
        // Guest user: product_id is actually the prisma_id 📌
        productId = 22;
      }

      const product = await Product.findOne({ prisma_id: Number(productId) });
      if (!product) {
        throw new Error(`Product not found for prisma_id: ${productId}`);
      }

      // 🔴 Check if enough stock
      if (product.quantity < Number(item.quantity)) {
        return res.status(400).json({
          success: false,
          message: `Insufficient stock for product: ${product.name}`,
        });
      }

      // 🟡 Deduct quantity from stock
      product.quantity -= Number(item.quantity);
      await product.save();

      const deliveryDays = shippingDays[courier_service] || 4;
      let deliverDate = new Date();
      deliverDate.setDate(deliverDate.getDate() + deliveryDays);

      const orderData = {
        product_id: product._id,
        store_id: product.store_id,
        quantity: Number(item.quantity),
        price: Number(item.price),
        total_price: Number(total_price),
        courier_service,
        status: "Processing",
        deliver_date: deliverDate,
        order_date: new Date(),
      };

      if (mongoUser) {
        orderData.reg_id = mongoUser._id;
      } else {
        orderData.guest_name = guest_name;
        orderData.guest_mobile = guest_mobile;
        orderData.guest_address = guest_address;
      }

      const newOrder = new Order(orderData);
      await newOrder.save();
      createdOrders.push(newOrder);
    }

    return res.status(201).json({
      success: true,
      message: "Orders placed successfully",
      orders: createdOrders,
    });

  } catch (error) {
    console.error("[placeOrder] Error:", error);
    return res.status(500).json({
      success: false,
      message: error.message || "Internal server error",
    });
  }
};




// Get orders by user (for /getorders route)
const getOrdersByUser = async (req, res) => {
  try {
    const reg_id = req.user?.reg_id || req.query.reg_id;
    if (!reg_id) {
      return res.status(400).json({ success: false, message: "reg_id is required" });
    }

    // Find MongoDB user by reg_id to get the ObjectId
    const mongoUser = await User.findOne({ reg_id: Number(reg_id) });
    if (!mongoUser) {
      return res.status(404).json({ success: false, message: "User not found in MongoDB." });
    }

    // Fetch all orders for the user
    const orders = await Order.find({ reg_id: mongoUser._id });


    // Enrich each order with product details
    const enrichedOrders = await Promise.all(orders.map(async (order) => {
      let productData = null;

      if (order.product_id) {
        const product = await Product.findById(order.product_id);
        if (product) {
          productData = {
            product_name: product.name,
            product_image: product.product_image,
            store_name: product.store_name,
            store_image: product.store_image,
          };
        }
      }

      return {
        ...order.toObject(),
        ...productData,
      };
    }));

    console.log("[getOrdersByUser] Enriched orders sample:", JSON.stringify(enrichedOrders[0], null, 2));
    res.json({ success: true, orders: enrichedOrders });

  } catch (error) {
    console.error("[getOrdersByUser] Error:", error);
    res.status(500).json({ success: false, message: error.message || "Internal server error" });
  }
};

// Cancel a specific order item (by seller)
const cancelOrderItem = async (req, res) => {
  try {
    const { orderId, itemId } = req.body;
    if (!orderId || !itemId) {
      return res.status(400).json({ success: false, message: 'orderId and itemId are required' });
    }
    // Find the order
    const order = await Order.findById(orderId);
    if (!order) {
      return res.status(404).json({ success: false, message: 'Order not found' });
    }
    // Find the item and set its status to 'cancelled'
    let itemCancelled = false;
    order.order_items = order.order_items.map(item => {
      if (item._id.toString() === itemId) {
        item.status = 'cancelled';
        itemCancelled = true;
      }
      return item;
    });
    // If all items are cancelled, set order status to 'cancelled'
    if (order.order_items.every(item => item.status === 'cancelled')) {
      order.status = 'cancelled';
    }
    await order.save();
    if (!itemCancelled) {
      return res.status(404).json({ success: false, message: 'Order item not found' });
    }
    res.json({ success: true, message: 'Order item cancelled' });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

const getOrdersForSellerDashboard = async (req, res) => {
  try {
    // ✅ Step 1: Get reg_id from authenticated user
    const reg_id = req.user.reg_id;
    if (!reg_id) {
      return res.status(401).json({ success: false, message: "Unauthorized" });
    }

    // ✅ Step 2: Find seller info by reg_id
    const seller = await Seller.findOne({ reg_id }).populate('store_id');
    if (!seller) {
      return res.status(404).json({ success: false, message: "Seller not found" });
    }

    const storeId = seller.store_id?._id;
    if (!storeId) {
      return res.status(404).json({ success: false, message: "Store not found for seller" });
    }

    // ✅ Step 3: Find all product IDs that belong to this store
    const products = await Product.find({ store_id: storeId }).select('_id');
    const productIds = products.map((p) => p._id);

    // ✅ Step 4: Fetch all orders where product_id matches store's products
    const orders = await Order.find({ product_id: { $in: productIds } })
      .populate('product_id') // optional: populate product details
      .populate('reg_id');    // optional: populate user who placed the order

    // ✅ Step 5: Return the orders
    return res.status(200).json({
      success: true,
      orders,
    });
  } catch (error) {
    console.error('Error in getOrdersForSellerStore:', error);
    return res.status(500).json({ success: false, message: "Server error" });
  }
};


module.exports = {
  placeOrder,
  getOrdersByUser,
  cancelOrderItem,
  getOrdersForSellerDashboard,
  // placeUserOrder,
  // placeGuestOrder,
};
