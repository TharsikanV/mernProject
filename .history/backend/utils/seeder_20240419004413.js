const products=require('../data/products.json');
const Product=require('../models/productModel');

const seedProducts=as()=>{
    Product.insertMany(products);
}