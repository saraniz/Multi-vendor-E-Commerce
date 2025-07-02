const Order = require('../models/order');
const Product = require('../models/product');

// Get monthly revenue and product names for a store
const getMonthlyRevenue = async (req, res) => {
  try {
    const { storeId } = req.params;
    if (!storeId) {
      return res.status(400).json({ success: false, message: 'storeId is required' });
    }
    // Find all products for this store
    const products = await Product.find({ store_id: storeId });
    const productIds = products.map(p => p._id.toString());
    // Map productId to product name
    const productMap = {};
    products.forEach(p => { productMap[p._id.toString()] = p.name; });
    // Find all orders with relevant statuses that contain at least one item from this store
    const orders = await Order.find({
      status: { $in: ['processing', 'delivered', 'shipped'] },
      'order_items.product_id': { $in: productIds }
    });
    // Group by month and collect product names and prices for this store only
    const monthly = {};
    orders.forEach(order => {
      const date = new Date(order.order_date);
      const month = `${date.getFullYear()}-${String(date.getMonth()+1).padStart(2,'0')}`;
      // Only consider items from this store
      order.order_items.forEach(item => {
        const prodId = item.product_id.toString();
        if (productIds.includes(prodId)) {
          const productName = productMap[prodId] || 'Unknown';
          const price = item.price || 0;
          if (!monthly[month]) monthly[month] = [];
          monthly[month].push({ productName, price });
        }
      });
    });
    res.json({ success: true, data: monthly });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

// Get all order items for a store with customer and courier info
const getOrdersByStore = async (req, res) => {
  try {
    const { storeId } = req.params;
    if (!storeId) {
      return res.status(400).json({ success: false, message: 'storeId is required' });
    }
    // Find all products for this store
    const products = await Product.find({ store_id: storeId });
    const productIds = products.map(p => p._id.toString());
    // Find all orders that contain at least one item from this store
    const orders = await Order.find({ 'order_items.product_id': { $in: productIds } }).populate('reg_id');
    // Build response: for each order, for each item belonging to this store, return required info
    const result = [];
    orders.forEach(order => {
      // Get customer info
      let customerName = order.guest_name || (order.reg_id && (order.reg_id.fullName || order.reg_id.name)) || 'N/A';
      let customerAddress = order.guest_address || (order.reg_id && order.reg_id.address) || 'N/A';
      let customerMobile = order.guest_mobile || (order.reg_id && order.reg_id.mobileNo) || 'N/A';
      let courier = order.courier_service || 'N/A';
      order.order_items.forEach(item => {
        const prodId = item.product_id.toString();
        if (productIds.includes(prodId)) {
          const productName = products.find(p => p._id.toString() === prodId)?.name || 'Unknown';
          result.push({
            orderId: order._id,
            itemId: item._id,
            productName,
            quantity: item.quantity,
            customerName,
            customerAddress,
            customerMobile,
            courier,
            status: item.status || order.status || 'N/A',
          });
        }
      });
    });
    res.json({ success: true, orders: result });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

module.exports = { getMonthlyRevenue, getOrdersByStore };
