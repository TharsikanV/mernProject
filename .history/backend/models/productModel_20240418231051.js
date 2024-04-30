const mongoose=require('mongoose');

const productSchema=new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Please enter product name"],//error vantha
        trim:true,
        maxLength:[100,"Product name cannot ex"]
    }
})