const catchAsyncError=require('../middlewares/catchAsyncError');
const stripe=require('st')

exports.processPayment=catchAsyncError(async(req,res,next)=>{
    const paymentIntent=
})