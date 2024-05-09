const catchAsyncError=require('../middlewares/catchAsyncError');
const stripe=require('stripe')(process.env.STRIPE_SECRET_KEY);

exports.processPayment=catchAsyncError(async(req,res,next)=>{
    const paymentIntent=aw
})