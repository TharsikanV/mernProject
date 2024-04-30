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
   req.user=await User.findById(decoded.id)//request la user endra property ah set panniyaachchu
   next();//request ah next middleware kku anuppa
})

exports.authorizeRoles=(...roles)=>{//onurkku meroadda roles ah anuppuvam ,array thaan
   (req,res,next)=>{
      if(!roles.includes(req.user.role)){
         return next(new ErrorHandler(`Role ${req.user.role}`))
      }
   }
}