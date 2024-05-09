const catchAsyncError=require('../middlewares/catchAsyncError');
const stripe=require('stripe')(this.processPayment)

exports.processPayment=catchAsyncError(async(req,res,next)=>{
    const paymentIntent=
})