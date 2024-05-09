const catchAsyncError=require('../middlewares/catchAsyncError');
const stripe=require('stripe')(pro)

exports.processPayment=catchAsyncError(async(req,res,next)=>{
    const paymentIntent=
})