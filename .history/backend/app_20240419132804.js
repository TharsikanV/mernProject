const express=require('express');
const app=express();
app.use(express.json());//vaara request la json data iruntha atha anumathikkum
const products=require('./routes/product')

app.use('/api/v1/',products)

app.use

module.exports=app;
//app ah intha file ah irunthu export pannaathaan verathula use pannalaam
