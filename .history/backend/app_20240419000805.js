const express=require('express');
const app=express();
app.use
const products=require('./routes/product')

app.use('/api/v1/',products)

module.exports=app;
//app ah intha file ah irunthu export pannaathaan verathula use pannalaam
