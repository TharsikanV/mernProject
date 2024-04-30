const products=require('../data/products.json');
const Product=require('../models/productModel');

const seedProducts=async ()=>{
    awProduct.deleteMany();
    await Product.insertMany(products);
    console.log('All products added!');
}