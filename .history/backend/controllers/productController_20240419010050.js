const Product=require('../models/productModel');

//Get Products --
const getProducts=(req,res,next)=>{
    res.status(200).json({
        success:true,
        message:"This route will show all the products in databse"
    })
}

// Create Product - /api/v1/product/new
const newProduct=async (req,res,next)=>{
  const product= await Product.create(req.body);
  res.status(201).json({
    success:true,
    product //naama product:product endum kodukkalaam
  })
}

module.exports = {
    getProducts,
    newProduct,
  };