const catchAsyncError=require('../middlewares/catchAsyncError');
const User=require()
exports.registerUser=catchAsyncError(async (req,res,next)=>{
    const {name,email,password,avatar}=req.body//destructuring method


})