const Product=require('../models/productModel');

//Get Products -/api/v1/products
const getProducts=async (req,res,next)=>{
    const products=await Product.find();
    res.status(200).json({
        success:true,
        cou
        products//key:va;ue apdyum kodukkalaam
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