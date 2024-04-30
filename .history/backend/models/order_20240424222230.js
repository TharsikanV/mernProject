const mongoose=require('mongoose');
const orderSchema=mongoose.Schema({
    shippingInfo:{
        address:{
            type:Str
        }
    }
})