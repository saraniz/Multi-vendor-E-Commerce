const express = require('express')
const {getAdminDashboard} = require('../controllers/dashboardController')
const authenticate = require('../middleware/authMiddleware')
const roleMiddleware = require('../middleware/roleMiddleware')

const router = express.Router()

//router.get('/get-Admin-dashboardData',authenticate, getAdminDashboard);

//router.get('get-Seller-dashboardData',authenticate, roleMiddleware(['seller']), getSellerDashboard);
//router.get('get-Customer-dashboardData',authenticate, roleMiddleware(['user']), getCustomerDashboard);



module.exports = router;