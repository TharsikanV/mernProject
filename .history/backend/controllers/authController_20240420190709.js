const catchAsyncError=require('../middlewares/catchAsyncError');
const User=require('../models/userModel');
exports.registerUser=catchAsyncError(async (req,res,next)=>{
    const {name,email,password,avatar}=req.body//destructuring method
    User.create({
        name,
        email,
        password,
        avatar
    });
    res.status(201).json({
        success:true,
        
    })
})