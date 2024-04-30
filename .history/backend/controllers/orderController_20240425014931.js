const catchAsyncError = require("../middlewares/catchAsyncError");
const Order=require('../models/orderModel');
const Product=require('../models/productModel');
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
    res.status(200).json({
        success:true,
        order
    })
})

//Get Loggedin User Orders - /api/v1/myorders
exports.myOrders=catchAsyncError(async (req,res,next)=>{
    const orders=await Order.find({user:req.user.id});
    
    res.status(200).json({
        success:true,
        orders
    })
})

//Admin:Get All Orders - api/v1/orders
exports.orders=catchAsyncError(async (req,res,next)=>{
    const orders=await Order.find();
    
    let totalAmount=0;

    orders.forEach(order => {
        totalAmount+=order.totalPrice
    });

    res.status(200).json({
        success:true,
        totalAmount,
        orders
    })
});

//Admin: Update Order / Order Status  - api/v1/order/:id
exports.updateOrder=catchAsyncError(async (req,res,next)=>{
    const order=await Order.findById(req.params.id).populate('user','name email')//'user' endrathu entha field ooda collection ah kondaaranum

    if(order.orderStatus=='Delivered'){
        return next(new ErrorHandler('Order has been already delivered!',400))
    }

    order.orderItems.forEach(orderItem=>{
        await updateStock(orderItem.product,orderItem.quantity)
    })
});

async function updateStock(productId,Quantity){
    const product=await Product.findById(productId);
    product.stock=product.stock-Quantity;
    product.save({validateBeforeSave:false})
}