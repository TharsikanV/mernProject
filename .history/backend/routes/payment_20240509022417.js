const express=require('express');
const router=express.Router();

router.route('/payment/process').get(logoutUser);


module.exports=router;