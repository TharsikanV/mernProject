const express=require('express');
const { getProducts } = require('../controllers/productController');
const router=express.Router();

router.route('/products').get(getProducts);
router.route('/product').get(getProducts);

module.exports=router;