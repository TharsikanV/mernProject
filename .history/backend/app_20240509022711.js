const express=require('express');
const app=express();
const errorMiddleware=require('./middlewares/error');
const cookieParser=require('cookie-parser');
const path = require('path');
const dotenv=require('dotenv');
dotenv.config({path:path.join(__dirname,"config/config.env")});
//dirname enda current folder ah tharum athayum ithayum inaikkirathuthaan

app.use(express.json());//vaara request la json data iruntha atha anumathikkum
app.use(cookieParser());
app.use('/uploads',express.static(path.join(__dirname,'uploads')))
//intha folderla irunthu file path ah edukkanumna static ah maathanum

const products=require('./routes/product')
const auth=require('./routes/auth')
const order=require('./routes/order')

app.use('/api/v1/',products);
app.use('/api/v1/',auth);
app.use('/api/v1/',order);
app.use('/api/v1/',);

app.use(errorMiddleware)//itha kadsiya thaan podanum

module.exports=app;
//app ah intha file ah irunthu export pannaathaan verathula use pannalaam
