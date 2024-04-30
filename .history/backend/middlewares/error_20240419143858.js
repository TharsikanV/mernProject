const { stack } = require("../app");

module.exports=(err,req,res,next)=>{
    err.statusCode=err.statusCode || 500;

    if(process.env.NODE_ENV=='development'){
        res.status(err.statusCode).json({
            success:false,
            message:err.message,
            stack:err.stack, //Error.captureStackTrace(this,this.constructor) line moolam kidaikkum
            //ithu developers maddum thaan theriyanum 
            error:err
        })
    }
    if(process.env.NODE_ENV=='production'){
        let message=err.message;
        let error-

        if(err.name=="ValidatorError"){
            message=Object.values(err.errors).map(value=>value.message)

        }

        res.status(err.statusCode).json({
            success:false,
            message:err.message
        })
    }

    
}