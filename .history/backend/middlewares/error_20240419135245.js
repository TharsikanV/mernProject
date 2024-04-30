const { stack } = require("../app");

module.exports=(err,req,res,next)=>{
    err.statusCode=err.statusCode || 500;

    if(process.env.NODE_ENV=='devlopment'){
        
    }

    
}