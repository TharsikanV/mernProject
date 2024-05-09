const express=require('express');
const router=express.Router();

router.route('/payment/').get(logoutUser);


module.exports=router;