const catchAsyncError=require('../middlewares/catchAsyncError');
const stripe=require()

exports.processPayment=catchAsyncError(async(req,res,next)=>{
    const paymentIntent=
})