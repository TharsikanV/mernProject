const catchAsyncError=require('../middlewares/catchAsyncError');
const stripe=req

exports.processPayment=catchAsyncError(async(req,res,next)=>{
    const paymentIntent=
})