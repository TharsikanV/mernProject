const { stack } = require("../app");
const ErrorHandler = require("../utils/errorHandler");

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
        let error =new Error(message);

        if(err.name=="ValidationError"){
            message=Object.values(err.errors).map(value=>value.message)
            error= new Error(message)
        }

        if(err.name=='CastError'){
            message=`Resourse not found: ${err.path}`;
            error= new Error(message)
        }

        if(err.code==11000){
            let message=`Duplicate ${Object.keys(err.keyValue)} error`;
            error= new Error(message)
        }
        if(err.name=='JSON')

        res.status(err.statusCode).json({
            success:false,
            message:error.message|| 'Internal Server Error',
        })
    }

    
}