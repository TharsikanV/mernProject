const mongoose=require('mongoose');

const productSchema=new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Please enter product name"],//error vantha
        trim:true,
        maxLength:[100,"Product name cannot exceed 100 characters"]
    },
    price:{
        type:Number,
        required:true,//ithu thevaye illa default value koduththa
        default:0.0
    },
    description:{
        type:String,
        required:[true,"Please enter product description"]
    },
    ratings:{
        type:String,
        default:0
    },
    images:[
        {
            filename:{
                type:String,
                required:true
            }
        }
    ],
    category:{
        type:String,
        required:[true,"Please enter product category"],
        enum:{//puthusha categories ah accept panna koodthu athukku thaan enum
            values:[
                'Electronics',
                'Mobile Phones',
                'Laptops',
                'Accessories',
                'Headphones',
                'Food',
                'Books',
                'Clothes/Shoes',
                'Beauty/Health',
                'Sports',
                'Outdoor',
                'Home'
            ],
            message:"Please select correct category"
              
        }
    },
    seller:{
        type:String,
        required:[true,"Please enter product seller"]
    },
    stock:{
        type:Number,
        required:[true,"Please enter product stock"],
        maxLength:[20,]
    }
})