const mongoose=require('mongoose');
const validator=require('validator');

const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:[true,'Please enter name']
    },
    email:{
        type:String,
        required:[true,'Please enter email'],
        unique:true,
        validate:[validator.isE]
    },
})