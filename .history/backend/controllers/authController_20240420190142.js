const catchAsyncError=require('../middlewares/catchAsyncError');
exports.registerUser=catchAsyncError(async (req,res,next)=>{
    const (name,email,pass)req.body
})