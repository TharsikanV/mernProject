const catchAsyncError=require('../middlewares/catchAsyncError');
const stripe=require('stripe')(process.env.)

exports.processPayment=catchAsyncError(async(req,res,next)=>{
    const paymentIntent=
})