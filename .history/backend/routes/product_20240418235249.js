const express=require('express');
const { getProducts } = require('../controllers/productController');
const router=express.Router();

router.route('/products').get(getProducts);
router.route('/product/new').g(getProducts);

module.exports=router;