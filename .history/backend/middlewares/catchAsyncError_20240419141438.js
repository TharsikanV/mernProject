// middleware function ah export pannapooram
module.exports= func=>(req,res,next)=>{
    Promise.resolve(func()).catch(next)
}