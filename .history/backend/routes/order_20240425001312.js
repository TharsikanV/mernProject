const express=require('express');
const { newOrder } = require('../controllers/orderController');
const router=express.Router();
const isAuthenticateduser=require('../middlewares/authenticate');

router.route('order/new').post(isAuthenticateduser,newOrder);

module.exports.

