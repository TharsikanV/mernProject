const express=require('express');
const app=express();
const errorMiddleware=require('./middlewares/error');

app.use(express.json());//vaara request la json data iruntha atha anumathikkum
const products=require('./routes/product')D

app.use('/api/v1/',products);
app.use('/api/v1/',);

app.use(errorMiddleware)//itha kadsiya thaan podanum

module.exports=app;
//app ah intha file ah irunthu export pannaathaan verathula use pannalaam
