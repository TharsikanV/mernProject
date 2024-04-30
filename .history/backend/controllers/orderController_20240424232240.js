const catchAsyncError = require("../middlewares/catchAsyncError");
const Order=require('../models/')
//Create New Order - api/v1/order/new
exports.newOrder=catchAsyncError(async (req,res,next)=>{
    const{
        orderItems,
        shippingInfo,
        itemsPrice,
        taxPrice,
        shippingPrice,
        totalPrice,
        paymentInfo
    }=req.body
})