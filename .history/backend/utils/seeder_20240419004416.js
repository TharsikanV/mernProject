const products=require('../data/products.json');
const Product=require('../models/productModel');

const seedProducts=async ()=>{
    Product.insertMany(products);
}