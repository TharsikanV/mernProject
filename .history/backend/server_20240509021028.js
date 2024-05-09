const app=require('./app');
const dotenv=require('dotenv');
const path=require('path');
const connectDatabase = require('./config/database');



connectDatabase();//db connection function
const server=app.listen(process.env.PORT,()=>{
    console.log(`My Server listening to the port :${process.env.PORT} in ${process.env.NODE_ENV}`)

})

process.on('unhandledRejection',(err)=>{
    console.log(`Error: ${err.message}`);
    console.log('Shutting down the server due to unhandled rejection error');
    server.close(()=>{//server program ah niruththa
        process.exit(1);//nodejs program ah niruththa
    })
})

process.on('uncaughtException',(err)=>{
    console.log(`Error: ${err.message}`);
    console.log('Shutting down the server due to uncaught exception error');
    server.close(()=>{//server program ah niruththa
        process.exit(1);//nodejs program ah niruththa
    })
})
// console.log(a);

