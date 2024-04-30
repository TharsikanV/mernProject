const sendToken=(user,statusCode,res)=>{
    //Creating JWT Token
    const token=user.getJwtToken();

    //setting cookies
    const options={
        expires:new 
    }


    res.status(statusCode).json({
        success:true,
        token,
        user
    })
}
module.exports=sendToken;