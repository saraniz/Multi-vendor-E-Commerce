const express = require('express');

const {admin_login, admin_logout, getAdminDashboardData, getBlockStore } = require('../controller/adminController');
const roleMiddleware = require('../middleware/roleMiddleware');
const authenticate = require('../middleware/authMiddleware');

const router = express.Router();

router.get('/',  (req, res) => {
    res.json({ message: 'Welcome to the Admin Dashboard' });
  }); 

router.post('/admin-login', admin_login); // Handle admin login(🟢)
router.post('/admin-logout', admin_logout);
//router.get('/admin-dashboard', authenticate, roleMiddleware(['admin']), getAdminDashboardData);
router.get('/admin-dashboard',  getAdminDashboardData); 
//router.put('/block-store/:store_id', authenticate, roleMiddleware(['admin']), getBlockStore);
router.put('/block-store/:store_id',  getBlockStore);
 
// Export the router
module.exports = router; 