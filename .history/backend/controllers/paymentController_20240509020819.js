const catchAsyncError=require('../middlewares/catchAsyncError');
const stripe=require('s')

exports.processPayment=catchAsyncError(async(req,res,next)=>{
    const paymentIntent=
})