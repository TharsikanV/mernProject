const express=require('express');
const { newOrder, getSingleOrder, myOrders } = require('../controllers/orderController');
const router=express.Router();
const {isAuthenticatedUser,authorizeRoles}=require('../middlewares/authenticate')

router.route('/order/new').post(isAuthenticatedUser,newOrder);
router.route('/order/:id').get(isAuthenticatedUser,getSingleOrder);
router.route('/myOrders').get(isAuthenticatedUser,myOrders);

//Admin Routes
router.route('/orders').get(isAuthenticatedUser,authorizeRoles())

module.exports=router;

