const catchAsyncError = require("../middlewares/catchAsyncError");
const Order=require('../models/orderModel');
const ErrorHandler = require("../utils/errorHandler");
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

    const order=await Order.create({
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
        success:true,
        order
    })
})
//Get Single Order- api/v1/order/:id
exports.getSingleOrder=catchAsyncError(async (req,res,next)=>{
    const order=await Order.findById(req.params.id).populate('user','name email')//'user' endrathu entha field ooda collection ah kondaaranum
    if(!order){
        return next(new ErrorHandler(`Order not found with thi id:${req.params.id}`,404))
    }
    res.status(200)
})