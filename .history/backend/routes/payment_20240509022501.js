const express=require('express');
const { isAuthenticatedUser } = require('../middlewares/authenticate');
const router=express.Router();

router.route('/payment/process').post(isAuthenticatedUser,pro);


module.exports=router;