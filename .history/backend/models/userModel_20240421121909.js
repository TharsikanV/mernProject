const mongoose=require('mongoose');
const validator=require('validator');
const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken');

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
        maxlength:[6,'password connot exceed 6 characters']
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
    jwt.sign({id:this.id},process.env.JWT_SECRET,{
        expiresIn:process.env.
    })
}

let model=mongoose.model('User',userSchema);

module.exports=model;