const catchAsyncError=require('../middlewares/catchAsyncError');
const User=require('../models/userModel');
const ErrorHandler=require()

exports.registerUser=catchAsyncError(async (req,res,next)=>{
    const {name,email,password,avatar}=req.body//destructuring method
    const user=await User.create({
        name,
        email,
        password,
        avatar
    });

    const token=user.getJwtToken();

    res.status(201).json({
        success:true,
        user,
        token
    })
})

exports.loginUser=catchAsyncError(async(req,res,next)=>{
    const {email,password}=req.body//destructure

    if(!email||!password){
        return next()
    }

})