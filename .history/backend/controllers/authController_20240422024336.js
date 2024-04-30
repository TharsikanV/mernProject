const catchAsyncError=require('../middlewares/catchAsyncError');
const User=require('../models/userModel');
const ErrorHandler=require('../utils/errorHandler');
const sendToken=require('../utils/jwt');

exports.registerUser=catchAsyncError(async (req,res,next)=>{
    const {name,email,password,avatar}=req.body//destructuring method
    const user=await User.create({
        name,
        email,
        password,
        avatar
    });

    // const token=user.getJwtToken();

    // res.status(201).json({
    //     success:true,
    //     user,
    //     token
    // })
    ////////////////mela irukkirathukku pathila utils/jwt la funtion podaachu
    sendToken(user,201,res)
})

exports.loginUser=catchAsyncError(async(req,res,next)=>{
    const {email,password}=req.body//destructure

    if(!email||!password){
        return next(new ErrorHandler('Please enter email &password',400))
    }
    
    //finding the user database
    const user=await User.findOne({email}).select('+password');//selct ulla +password endu koduthaathaan edukkum

    if(!user){
        return next(new ErrorHandler('Invalid email or password',400))
    }

    //match the passwords
    if(!await user.isValidPassword(password)){
        return next(new ErrorHandler('Invalid email or password',400))
    }

    sendToken(user,201,res)

})

exports.logoutUser=(req,res,next)=>{
    res.cookie('token',null,{
        expires:new Date(Date.now()),
        httpOnly:true
    })
    .status(200)
    .json({
        success:true,
        message:"Loggedout"
    })
}

exports.forgotPassword=catchAsyncError(async (req,res,next)=>{
    const user=await User.findOne({email:req.body.email})

    if(!user){
        return next(new ErrorHandler('User not found with this email',404))
    }

    const resetToken=user.getResetToken();

    user.save({validateBeforeSave:})
})