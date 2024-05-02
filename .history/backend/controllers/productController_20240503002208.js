const Product=require('../models/productModel');
const ErrorHandler=require('../utils/errorHandler');
const catchAsyncError=require('../middlewares/catchAsyncError');
const APIFeatures=require('../utils/apiFeatures');
//Get Products -/api/v1/products
const getProducts=catchAsyncError(async (req,res,next)=>{
    const resPerPage=3;
    const apiFeatures=new APIFeatures(Product.find(),req.query).search().filter().paginate(resPerPage);
    
    let buildQuery=()=>{
      return new APIFeatures(Product.find(),req.query).search().filter();
    }

    const filteredProductsCount=buildQuery().query.countDocuments({});//filter seyyappadd product ooda count ah konduvarum
    const totalProductsCount=await Product.countDocuments({});//total products count tharum

    // const products=await Product.find();
    // const products=await apiFeatures.query; //ithukku pathilathaan buildQuery() uruvaakirukkam
    await new Promise(resolve=>setTimeout(resolve,1000))//2 sec wait panniratukku(loading)
    
    res.status(200).json({
        success:true,
        // count:products.length,
        count:totalProductsCount,
        resPerPage,
        products//key:value apdyum kodukkalaam
    })
})

// Create Product - /api/v1/product/new
const newProduct=catchAsyncError(async(req,res,next)=>{
  req.body.user=req.user.id //user endra property kku user id ah kodukkiram
  const product= await Product.create(req.body);
  res.status(201).json({
    success:true,
    product //naama product:product endum kodukkalaam
  })
}) 

//Get Single Product- /api/v1/product/:id
const getSingleProduct=catchAsyncError(async(req,res,next)=>{
   const product=await Product.findById(req.params.id);
   if(!product){
      // return res.status(404).json({
      //   success:false,
      //   message:"Product not found"
      // });
      return next(new ErrorHandler('Product not found',400))
   }
  //  await new Promise(resolve=>setTimeout(resolve,3000))//3 sec wait panniratukku(loading)
   res.status(201).json({
    success:true,
    product
   })
})

//Update Product- /api/v1/product/:id
const updateProduct=catchAsyncError(async(req,res,next)=>{
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
})

//Delete Product - /api/v1/product/:id
const deleteProduct=catchAsyncError(async(req,res,next)=>{
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
})

//Create Review -api/v1/review
const createReview=catchAsyncError(async(req,res,next)=>{
    const {productId,rating,comment}=req.body;

    const review={
      user:req.user.id,
      rating:rating,
      comment
    }

    const product=await Product.findById(productId);

    //finding user review exists
    const isReviewed=product.reviews.find(review=>{//afrray endrathaala find() use pannalaam
        return review.user.toString()==req.user.id.toString()
    })

  if(isReviewed){
    //updating the review
      product.reviews.forEach(review=>{
        if(review.user.toString()==req.user.id.toString()){
          review.comment=comment
          review.rating=rating
        }
      })
  }
  else{
    //creating the review
    product.reviews.push(review);//array
    product.numOfReviews=product.reviews.length;
  }

  //find the average of the product reviews
  product.ratings=product.reviews.reduce((acc,review)=>{
    return review.rating+acc;
  },0)/product.ratings.length;
  //acc oda initioal value

  product.ratings=isNaN(product.ratings)?0:product.ratings;

  await product.save({validateBeforeSave:false});

  res.status(200).json({
    success:true
  })


})

//Get Reviews -api/v1/reviews/id={productId}
const getReviws=catchAsyncError(async(req,res,next)=>{
  const product=await Product.findById(req.query.id);

  res.status(200).json({
    success:true,
    reviews:product.reviews
  })
})

//Delete Review -api/v1/review
const deleteReview=catchAsyncError(async(req,res,next)=>{
  const product=await Product.findById(req.query.productId);
  
  //filtering the reviews which does not match the deleting review id
  const reviews=product.reviews.filter(review=>{
    review._id.toString!=req.query.id.toString()
  });
  //number of reviews
  const numOfReviews=reviews.length;

  //finding the average with the filtered reviews
  let ratings=reviews.reduce((acc,review)=>{//ellathayum koodi tharum
    return review.rating+acc;
  },0)/product.ratings.length;
  //acc oda initioal value
  ratings=isNaN(ratings)?0:ratings;

  //saving the product document
  await Product.findByIdAndUpdate(req.query.productId,{
    reviews,
    numOfReviews,
    ratings
  })

  res.status(200).json({
    success:true
  })

})

module.exports = {
    getProducts,
    newProduct,
    getSingleProduct,
    updateProduct,
    deleteProduct,
    createReview,
    getReviws,
    deleteReview
  };