const catchAsyncError = require("../middlewares/catchAsyncError");
const Order=require('../models/orderModel');
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

    const order=await Order.Create({
        orderItems,
        shippingInfo,
        itemsPrice,
        taxPrice,
        shippingPrice,
        totalPrice,
        paymentInfo,
        paidAt:Date.now(),
        user:req.user.id
    })
    res.status(200).json({
        succe
    })
})