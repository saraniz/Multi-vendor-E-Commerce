const express = require('express')
const {getAdminDashboard} = require('../controllers/dashboardController')
const authenticate = require('../middleware/authMiddleware')
const roleMiddleware = require('../middleware/roleMiddleware')

const router = express.Router()

router.get('/get-Admin-dashboardData',authenticate, getAdminDashboard);





module.exports = router;