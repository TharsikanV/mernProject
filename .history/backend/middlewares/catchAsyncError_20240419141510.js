// middleware function ah export pannapooram
module.exports= func=>(req,res,next)=>{
    retunPromise.resolve(func(req,res,next)).catch(next)
}