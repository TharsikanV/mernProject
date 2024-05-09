const express=require('express');
const router=express.Router();

router.route('/').get(logoutUser);


module.exports=router;