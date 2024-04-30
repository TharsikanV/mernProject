const products=require('../data/products.json');
const Product=require('../models/productModel');

const seedProducts=async ()=>{
    try{
        await Product.deleteMany();
        console.log('products deleted!');
        await Product.insertMany(products);
        console.log('All products added!');
    }catch(error){
       
        console.log('All products added!');
    }
   
}