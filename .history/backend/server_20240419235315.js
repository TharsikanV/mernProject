const app=require('./app');
const dotenv=require('dotenv');
const path=require('path');
const connectDatabase = require('./config/database');

dotenv.config({path:path.join(__dirname,"config/config.env")});
//dirname enda current folder ah tharum athayum ithayum inaikkirathuthaan

connectDatabase();//db connection function
app.listen(process.env.PORT,()=>{
    console.log(`My Server listening to the port :${process.env.PORT} in ${process.env.NODE_ENV}`)

})

process.on('unhandledRejection',(err))