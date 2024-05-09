const express=require('express');
const { isAuthenticatedUser } = require('../middlewares/authenticate');
const { processPayment } = require('../controllers/paymentController');
const router=express.Router();

router.route('/payment/process').post(isAuthenticatedUser,processPayment);
router.route('/stripeapi').get(isAuthenticatedUser,processPayment);

module.exports=router;