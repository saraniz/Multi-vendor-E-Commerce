const Order = require('../models/order');
const Product = require('../models/product');

// Get product sales by category for a store
const getProductSalesByCategory = async (req, res) => {
  try {
    const { storeId } = req.params;
    if (!storeId) {
      return res.status(400).json({ success: false, message: 'storeId is required' });
    }
    // Find all orders for this store
    const orders = await Order.find({ status: { $in: ['processing', 'delivered', 'shipped'] } });
    // Map product_id to category
    const productIds = orders.map(o => o.product_id);
    const products = await Product.find({ _id: { $in: productIds }, store_id: storeId });
    // Count sales by category
    const categoryCount = {};
    products.forEach(product => {
      const category = product.category || 'Other';
      if (!categoryCount[category]) categoryCount[category] = 0;
      // Count how many orders for this product
      const count = orders.filter(o => o.product_id.toString() === product._id.toString()).length;
      categoryCount[category] += count;
    });
    res.json({ success: true, data: categoryCount });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

module.exports = { getProductSalesByCategory };
