const sendToken=(user,statusCode,res)=>{
    //Creating JWT Token
    const token=user.getJwtToken();

    //setting cookies
    const options={
        expires:new Date(Date.now()+process.env.COOKIE_EXPIRES_TIME*24*60*60*1000),
        httpOnly:true,//http request ah thaan payanpaduththanum javasript aala ellam access paannalaathu
    
    }


    res.status(statusCode)
    .cookie('token',token)//key value paar
    .json({
        success:true,
        token,
        user
    })
}
module.exports=sendToken;