const catchAsyncError=require('../middlewares/catchAsyncError');
const User=require('../models/userModel');
const sendEmail = require('../utils/email');
const ErrorHandler=require('../utils/errorHandler');
const sendToken=require('../utils/jwt');
const crypto=require('crypto');

//Register User -/api/v1/register
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

//Login User -/api/v1/login
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

//Loguot -/api/v1/logout
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

//Forgot Password -/api/v1/password/forgot
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

//Reset Password -/api/v1/password/reset/:token
exports.resetPassword=catchAsyncError(async(req,res,next)=>{
    const restPasswordToken=crypto.createHash('sha256').update(req.params.token).digest('hex');
    //url ah paramitera vantha the hash panniddan

    const user=await User.findOne({
        resetPasswordToken:restPasswordToken,
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

//Get User Profile -/api/v1/myprofile
exports.getUserProfile=catchAsyncError(async (req,res,next)=>{
    const user=await User.findById(req.user.id)

    res.status(200).json({
        success:true,
        user
    })
})

//Change Password -/api/v1/password/change
exports.changePassword=catchAsyncError(async (req,res,next)=>{
    const user=await User.findById(req.user.id).select('+password');
    //default ah password field varaathu but select moolam vara vaikkalaam

    //chek old password
    if(!await user.isValidPassword(req.body.oldPassword)){
        return next(new ErrorHandler('Old password is incorrect',401));
    }

    //assigning new password 
    user.password=req.body.password;
    await user.save();
    res.status(200).json({
        success:true,
    })

})

//Update Profile -/api/v1/update
exports.updateProfile=catchAsyncError(async (req,res,next)=>{
    const newUserData={
        name:req.body.name,
        email:req.body.email
    }
    const user=await User.findByIdAndUpdate(req.user.id,newUserData,{
        new:true,//new data ah thaan return pannanum
        runValidators:true,//validation ellaam run aakanum
    })

    res.status(200).json({
        success:true,
        user
    })
})

//Admin:Get All Users -
exports.getAllUsers=catchAsyncError(async (req,res,next)=>{
    const users=await User.find();
    res.status(200).json({
        success:true,
        users
    })
})

//Admin: Get Specific User
exports.getUser=catchAsyncError(async (req,res,next)=>{
   const user= await User.findById(req.params.id);
   if(!user){
     return next(new ErrorHandler(`User not found with this id ${req.params.id}`))
   }
   res.status(200).json({
        success:true,
        user
    })
})

//Admin:Update User 
exports.updateUser=catchAsyncError(async (req,res,next)=>{
    const newUserData={
        name:req.body.name,
        email:req.body.email,
        role:req.body.role
    }
    const user=await User.findByIdAndUpdate(req.params.id,newUserData,{
        new:true,//new data ah thaan return pannanum
        runValidators:true,//validation ellaam run aakanum
    })

    res.status(200).json({
        success:true,
        user
    })
})

//Admkn: Delete User
exports.deleteUser=catchAsyncError(async (req,res,next)=>{