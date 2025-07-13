const express = require('express')
const { payForSingleProduct, checkoutCart} = require('../controller/paymentController');
const authenticate = require('../middleware/authMiddleware')
const roleMiddleware = require('../middleware/roleMiddleware')
const webhookController = require('../controller/webhookController');
const router = express.Router()



router.post('/pay-now', payForSingleProduct);
router.post('/checkout-cart', checkoutCart);
router.post('/webhook', webhookController);

module.exports = router;
