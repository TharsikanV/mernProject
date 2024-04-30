const express=require('express');
const app=express();
app.use(express.json());//vaara request la json data irut
const products=require('./routes/product')

app.use('/api/v1/',products)

module.exports=app;
//app ah intha file ah irunthu export pannaathaan verathula use pannalaam
