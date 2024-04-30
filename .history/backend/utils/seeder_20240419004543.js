const products=require('../data/products.json');
const Product=require('../models/productModel');

const seedProducts=async ()=>{
    await Product.deleteMany();
    console.log('All products added!');
    await Product.insertMany(products);
    console.log('All products added!');
}