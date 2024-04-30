const Product=require('../models/productModel');

//Get Products -/api/v1/products
const getProducts=async (req,res,next)=>{
    const products=await Product.find();
    res.status(200).json({
        success:true,
        count:products.length,
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

//Get Single Product
const getSingleProduct=async(req,res,next)=>{
   const product=await Product.findById(req.params.id);
   if(!product){
      return res.status(404).json({
        success:false,
        message:"Product not found"
      })
   }
   res.status(201).json({
    success:true,
    product
   })
}

//Update Product
const updateProduct=async(req,res,)=>{

}

module.exports = {
    getProducts,
    newProduct,
    getSingleProduct,
  };