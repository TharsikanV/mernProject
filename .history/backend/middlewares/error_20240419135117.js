const { stack } = require("../app");

module.exports=(err,req,res,next)=>{
    err.statusCode=err.statusCode || 500;

    if(process.env.N)

    res.status(err.statusCode).json({
        success:false,
        message:err.message,
        stack:err.stack //Error.captureStackTrace(this,this.constructor) line moolam kidaikkum
        //ithu developers maddum thaan theriyanum 
    })
}