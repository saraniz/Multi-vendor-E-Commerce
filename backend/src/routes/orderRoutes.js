const express = require('express');
const router = express.Router();
const orderController = require('../controller/orderController');
const orderAnalyticsController = require('../controller/orderAnalyticsController');
const orderRevenueController = require('../controller/orderRevenueController');
const authenticate = require('../middleware/authMiddleware');
const optionalAuthenticate = require('../middleware/optionalAuthenticate')

// For both guests and registered users
router.post('/placeorder',optionalAuthenticate, orderController.placeOrder); // Remove authenticate middleware for guest checkout
router.get('/getorders',authenticate, orderController.getOrdersByUser);
// Seller: Get all order items for a store (for seller order view)
router.get('/store/:storeId/orders', orderRevenueController.getOrdersByStore);
// Seller: Cancel a specific order item
router.post('/cancel-order-item', orderController.cancelOrderItem);
// Analytics: Product sales by category for a store
router.get('/analytics/category-sales/:storeId', orderAnalyticsController.getProductSalesByCategory);
// Analytics: Monthly revenue and product names for a store
router.get('/analytics/monthly-revenue/:storeId', orderRevenueController.getMonthlyRevenue);

router.get('/getsellerorders',authenticate,orderController.getOrdersForSellerDashboard)

module.exports = router;
