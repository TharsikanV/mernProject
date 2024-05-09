const catchAsyncError=require('../middlewares/cat')

exports.processPayment=catchAsyncError()