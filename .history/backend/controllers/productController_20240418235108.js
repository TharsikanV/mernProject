const Product=require('../models/productModel');

const getProducts=(req,res,next)=>{
    res.status(200).json({
        success:true,
        message:"This route will show all the products in databse"
    })
}

const newProduct=async (req,res,next)=>{
  const product= await Product.create(req.body);
  res.status(201).json({
    success:true,
    product //naame product:
  })
}

module.exports = {
    getProducts,
  };