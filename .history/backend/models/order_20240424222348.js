const mongoose=require('mongoose');
const orderSchema=mongoose.Schema({
    shippingInfo:{
        address:{
            type:String,
            required:true
        },
        country:{
            type:String,
            required:true
        },
        city:{
            type:String,
            required:true
        },
        phone:{
            type:String,
            required:true
        }
    }
})