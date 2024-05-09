const express=require('express');
const router=express.Router();

router.route('/payment/process').post(logoutUser);


module.exports=router;