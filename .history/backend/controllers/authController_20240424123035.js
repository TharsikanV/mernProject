const catchAsyncError=require('../middlewares/catchAsyncError');
const User=require('../models/userModel');
const sendEmail = require('../utils/email');
const ErrorHandler=require('../utils/errorHandler');
const sendToken=require('../utils/jwt');
const crypto=require('crypto');

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

    await user.save({validateBeforeSave:false})//save pannum pothu entha validation error um varakoodathu enrathukku

    //Create reset url
    const resetUrl=`${req.protocol}://${req.get('host')}/api/v1/password/reset/${resetToken}`;
    //http//127.0.0.1/api/v1/password/reset/{token}

    const message=`Your password reset url is as follows \n\n
    ${resetUrl}\n\n If you have not requested this email,then ignore it.`;

    try{
        sendEmail({
            email:user.email,
            subject:"JVLcard Password Recovery",
            message //ipd kodukklaam muthalum pathirukkan ipd
        })
        res.status(200).json({
            success:true,
            message:`Email sent to ${user.email}`
        })
    }catch(error){
        user.resetPasswordToken=undefined;
        user.resetPasswordTokenExpire=undefined;
        await user.save({validateBeforeSave:false});
        return next(new ErrorHandler(error.message,500))
    }

})

exports.resetPassword=catchAsyncError(async(req,res,next)=>{
    const restPasswordToken=crypto.createHash('sha256').update(req.params.token).digest('hex');
    //url ah paramitera vantha the hash panniddan

    const user=await User.findOne({
        resetPasswordToken:,
        resetPasswordTokenExpire:{
            $gt:Date.now()
        }
    })

    if(!user){
        return next(new ErrorHandler('Password reset token is invalid or expired'));
    }

    if(req.body.password!=req.body.confirmPassword){
        return next(new ErrorHandler('Password does not match'));
    }

    user.password=req.body.password;//new password ah set panniddan
    user.resetPasswordToken=undefined;
    user.resetPasswordTokenExpire=undefined;
    await user.save({validateBeforeSave:false})//inka intha oru validationum seyya vendaam

    sendToken(user,201,res)
})