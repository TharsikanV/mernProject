const express=require('express');
const { newOrder } = require('../controllers/orderController');
const router=express.Router();
const {isAuthenticatedUser,authorizeRoles}=require('../middlewares/authenticate')

router.route('/order/new').post(isAuthenticatedUser,newOrder);
router.route('api/v1/order/:id').post(isAuthenticatedUser,newOrder);

module.exports=router;

