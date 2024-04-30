const express=require('express');
const { newOrder } = require('../controllers/orderController');
const router=express.Router();
const {isAuthenticatedUser,authorizeRoles}=require('../middlewares/authenticate')

router.route('/order/new').post(is,newOrder);

module.exports=router;

