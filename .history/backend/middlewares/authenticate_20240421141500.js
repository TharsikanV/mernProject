const catchAsyncError = require("./catchAsyncError");

exports.isAuthenticatedUser=catchAsyncError(async(req,res,next)=>{
   const {} req.cookies
})