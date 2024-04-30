const sendToken=(user,statusCode,res)=>{
    //Creating JWT Token
    const token=user.getJwtToken();

    //setting cookies
    const options={
        expires:new Date(Date.now()+process.env.COOKIE_EXPIRES_TIME*2)
    }


    res.status(statusCode).json({
        success:true,
        token,
        user
    })
}
module.exports=sendToken;