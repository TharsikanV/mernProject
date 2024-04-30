const ErrorHandler = require("../utils/errorHandler");
const catchAsyncError = require("./catchAsyncError");

exports.isAuthenticatedUser=catchAsyncError(async(req,res,next)=>{
   const {token}=req.cookies;//destructure

   if(!token){
    return next(new ErrorHandler(''))
   }
})