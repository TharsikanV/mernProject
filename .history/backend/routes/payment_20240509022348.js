const express=require('express');
const router=express.Router();

router.route('/logout').get(logoutUser);


module.exports=router;