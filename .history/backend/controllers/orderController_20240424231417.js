const catchAsyncError = require("../middlewares/catchAsyncError");

//Create New Order - api/v1/order/new
exports.newOrder=catchAsyncError(async (req,res,next)=>{
    const{
        orderItems,
        shippingInfo,
        itemsPrice,
        tax
    }=req.body
})