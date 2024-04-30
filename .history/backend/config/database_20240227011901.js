const mongoose = require('mongoose');

const connectDatabase =()=>{
    mongoose.connect(process.env.DB_LOCAL_URI,{
        useNewUrlParser:true,
        useUnifieldTopology:true
    }).then(con=>{
        console.log(`MongoDB is connected to the host:${con.connection.host}`)
    }).catch((err)=>{
        console.log(err)
    })
}

module.exports=connectDatabase;