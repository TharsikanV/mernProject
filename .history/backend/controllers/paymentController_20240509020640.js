const catchAsyncError=require('../middlewares/catchAsyncError')

exports.processPayment=catchAsyncError()