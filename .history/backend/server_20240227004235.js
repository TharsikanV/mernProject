const app=require('./app');
const dotenv=require('dotenv');

dotenv.config({path:"config/config.env"});

app.listen(process.env.PORT,()=>{
    console.log(`Server listening to the port ${process.env.PORT} in ${process.env.N}`)
})