const ErrorHandler = require("../utils/errorHandler");
const User=require('../models/userModel');
const catchAsyncError = require("./catchAsyncError");
const jwt=require('jsonwebtoken');
exports.isAuthenticatedUser=catchAsyncError(async(req,res,next)=>{
   const {token}=req.cookies;//destructure

   if(!token){
    return next(new ErrorHandler('Login first to handle this resource',401))
    //next middle vaarukkakathaan next() use pannirathu
   }
   
   const decoded=jwt.verify(token,process.env.JWT_SECRET)
   req.usUser.findById(decoded.id)

})