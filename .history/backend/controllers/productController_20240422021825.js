const Product=require('../models/productModel');
const ErrorHandler=require('../utils/errorHandler');
const catchAsyncError=require('../middlewares/catchAsyncError');
const APIFeatures=require('../utils/apiFeatures');
//Get Products -/api/v1/products
const getProducts=async (req,res,next)=>{
    const resPerPage=2;
    const apiFeatures=new APIFeatures(Product.find(),req.query).search().filter().paginate(resPerPage);
    // const products=await Product.find();
    const products=await apiFeatures.query;
    res.status(200).json({
        success:true,
        count:products.length,
        products//key:va;ue apdyum kodukkalaam
    })
}

// Create Product - /api/v1/product/new
const newProduct=catchAsyncError(async(req,res,next)=>{
  req.body.user=req.user.id //user endra pro
  const product= await Product.create(req.body);
  res.status(201).json({
    success:true,
    product //naama product:product endum kodukkalaam
  })
}) 

//Get Single Product- /api/v1/product/:id
const getSingleProduct=async(req,res,next)=>{
   const product=await Product.findById(req.params.id);
   if(!product){
      // return res.status(404).json({
      //   success:false,
      //   message:"Product not found"
      // });
      return next(new ErrorHandler('Product not found',400))
   }
   res.status(201).json({
    success:true,
    product
   })
}

//Update Product- /api/v1/product/:id
const updateProduct=async(req,res,next)=>{
  let product=await Product.findById(req.params.id);
  if(!product){
    return res.status(404).json({
      success:false,
      message:"Product not found"
    });
  }

  product=await Product.findByIdAndUpdate(req.params.id,req.body,{
      new:true, //update panna data thaan varanum old varakoodaanu theriyapadutha
      runValidators:true//naama productmodel ah koduthiruppam athukkaaka
  })

  res.status(200).json({
    success:true,
    product
  })
}

//Delete Product - /api/v1/product/:id
const deleteProduct=async(req,res,next)=>{
  const product=await Product.findById(req.params.id);
   if(!product){
      return res.status(404).json({
        success:false,
        message:"Product not found"
      });
   }
  //  await product.remove();
  await Product.deleteOne({ _id: req.params.id });//ithu chatgpt thanthathu melaan work aakithu illa
   
   res.status(200).json({
    success:true,
    message:"Product Deleted!"
   })
}

module.exports = {
    getProducts,
    newProduct,
    getSingleProduct,
    updateProduct,
    deleteProduct,
  };