const products=require('../data/products.json');
const Product=require('../models/productModel');

const seedProducts=async ()=>{
    Product.deleteMany
    await Product.insertMany(products);
    console.log('All products added!');
}