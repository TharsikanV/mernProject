const catchAsyncError=require('../middlewares/catchAsyncError');

exports.processPayment=catchAsyncError(async(req,res,next)=>{
    const paymentIntent
})