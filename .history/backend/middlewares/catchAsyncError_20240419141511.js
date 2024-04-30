// middleware function ah export pannapooram
module.exports= func=>(req,res,next)=>{
    retun Promise.resolve(func(req,res,next)).catch(next)
}