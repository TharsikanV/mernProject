const express=require('express');
const { newOrder } = require('../controllers/orderController');
const router=express.Router();
const isAuthenticateduser=require('../middlewares')

router.route('order/new').post(,newOrder);

