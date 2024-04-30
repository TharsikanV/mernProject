const express=require('express');
const { newOrder, getSingleOrder } = require('../controllers/orderController');
const router=express.Router();
const {isAuthenticatedUser,authorizeRoles}=require('../middlewares/authenticate')

router.route('/order/new').post(isAuthenticatedUser,newOrder);
router.route('/order/:id').get(isAuthenticatedUser,getSingleOrder);
router.route('/myOrders').get(isAuthenticatedUser,my);

module.exports=router;

