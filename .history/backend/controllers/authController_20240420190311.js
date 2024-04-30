const catchAsyncError=require('../middlewares/catchAsyncError');
const User=requ
exports.registerUser=catchAsyncError(async (req,res,next)=>{
    const {name,email,password,avatar}=req.body//destructuring method


})