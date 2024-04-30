const mongoose=require('mongoose');
const validator=require('validator');
const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken');
const crypto=require('crypto');

const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:[true,'Please enter name']
    },
    email:{
        type:String,
        required:[true,'Please enter email'],
        unique:true,
        validate:[validator.isEmail,'Please enter valid email address']
    },
    password:{
        type:String,
        required:[true,'Please enter password'],
        maxlength:[6,'password connot exceed 6 characters'],
        select:false//oru user ta data ah edukkum pothu password field irukkaathu
    },
    avatar:{
        type:String,
        required:true
    },
    role:{
        type:String,
        default:'user'
    },
    resetPasswordToken:String,
    resetPasswordTokenExpire:Date,
    createdAt:{
        type:Date,
        default:Date.now
    }

})

//password encrypt
userSchema.pre('save',async function(next){
    this.password= await bcrypt.hash(this.password,10)
})
//pre endrathu oru munkoodiye call pannakoodiya middleware function maari

userSchema.methods.getJwtToken=function(){
    return jwt.sign({id:this.id},process.env.JWT_SECRET,{
        expiresIn:process.env.JWT_EXPIRES_TIME
    })
}
//inka naama call pannumpothu maddumthaan token generate seyyapadum
userSchema.methods.isValidPassword=async function(enteredPassword){
    return await bcrypt.compare(enteredPassword,this.password)
}

userSchema.methods.getResetToken=function(){
    //Generate Token 
    const token=crypto.randomBytes(20).toString('hex');//hexadecimal encoding kodithiruuku

    //Generate Hash and set to resetPasswordToken
   this.resetPasswordToken=crypto.createHash('sha256').update(token).digest('hex');
    //hashing algorithm 'sha256'

    //set token expire time
    this.resetPasswordTokenExpire=Date.now()+30*60*1000;

    return token
}
///////////////////////////
// Assuming this method is part of a Mongoose schema method or an instance method within a class
userSchema.methods.getResetToken = function() {
    try {
        // Generate Token
        const token = crypto.randomBytes(20).toString('hex');

        // Generate Hash and set to resetPasswordToken
        this.resetPasswordToken = crypto.createHash('sha256').update(token).digest('hex');

        // Set token expiration time (30 minutes from now)
        this.resetPasswordTokenExpire = Date.now() + 30 * 60 * 1000;

        return token;
    } catch (err) {
        // Handle error (e.g., log it, return a default token, etc.)
        console.error('Error generating reset token:', err);
        return null; // Or return a default token or throw the error
    }
};

///////////////////////////////
let model=mongoose.model('User',userSchema);

module.exports=model;