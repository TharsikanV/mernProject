const catchAsyncError=require('../middlewares/catchAsyncError');
const stripe=require('stripe')

exports.processPayment=catchAsyncError(async(req,res,next)=>{
    const paymentIntent=
})