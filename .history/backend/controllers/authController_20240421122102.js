const catchAsyncError=require('../middlewares/catchAsyncError');
const User=require('../models/userModel');
exports.registerUser=catchAsyncError(async (req,res,next)=>{
    const {name,email,password,avatar}=req.body//destructuring method
    const user=await User.create({
        name,
        email,
        password,
        avatar
    });

    const token=

    res.status(201).json({
        success:true,
        user
    })
})