const express = require('express');

const {getTotalPaymentsByUser, getWarning3Sellers, getWarning2Sellers, getWarning1Sellers, getAllShops ,getSellersForActions ,getDashboardData ,admin_login, admin_logout, getProdctData, getSellerData, getUserCounts, blockSeller, unblockSeller, sendWarning1, sendWarning2, sendWarning3, getAllCustomers, getStoreWithSellerStatus, getStoreCount, countBlockedSellers, countWarning1, countWarning2, countWarning3 } = require('../controller/adminController');
const roleMiddleware = require('../middleware/roleMiddleware');
const authenticate = require('../middleware/authMiddleware');

const router = express.Router();

router.get('/',  (req, res) => {
    res.json({ message: 'Welcome to the Admin Dashboard' });
  }); 

router.post('/admin-login', admin_login); // Handle admin login(🟢)
router.post('/admin-logout', admin_logout);
//router.get('/admin-dashboard', authenticate, roleMiddleware(['admin']), getAdminDashboardData);
router.get('/admin-dashboard-products',  getProdctData); 
router.get('/admin-dashboard-sellers',  getSellerData); 
//router.put('/block-store/:store_id', authenticate, roleMiddleware(['admin']), getBlockStore);
router.put('/block/:seller_id',  blockSeller);
router.put('/unblock/:seller_id',  unblockSeller);
// count sellers and customers
router.get('/user-counts', getUserCounts);
router.get('/all', getAllCustomers);
router.get('/status', getStoreWithSellerStatus);
//warnings send 
//router.post("/warnings/send", sendWarning);
router.put('/send-warning-1', sendWarning1);
router.put('/send-warning-2', sendWarning2);
router.put('/send-warning-3', sendWarning3);

// adminn dasshbord routes  👇👇👇
router.get('/shop-count', getStoreCount);
router.get('/blocked-count', countBlockedSellers);
router.get('/warning1-count', countWarning1);
router.get('/warning2-count', countWarning2);
router.get('/warning3-count', countWarning3);
router.get('/dashboard-data', getDashboardData);
router.get('/basic', getSellersForActions);
router.get("/shops", getAllShops);

router.get('/warning1', getWarning1Sellers);
router.get('/warning2', getWarning2Sellers);
router.get('/warning3', getWarning3Sellers);
router.get("/totals", getTotalPaymentsByUser);
// Export the router
module.exports = router; 