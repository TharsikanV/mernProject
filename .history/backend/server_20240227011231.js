const app=require('./app');
const dotenv=require('dotenv');
const path=require('path');

dotenv.config({path:path.join(__dirname,"config/config.env")});
//dirname enda current folder ah tharum athayum ithayum inaikkirathuthaan

app.listen(process.env.PORT,()=>{
    console.log(`Server listening to the port :${process.env.PORT} in ${process.env.NODE_ENV}`)

})