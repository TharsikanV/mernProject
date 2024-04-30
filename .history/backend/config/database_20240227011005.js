const mongoose = require('mongose');

const connectDatabase =()=>{
    mongoose.connect(process.env.DB_LOCAL_URI,{
        useNewUrlParser:true,
        useUnifieldTopology:true
    }).then(con=>{
        console.log(`MongoDB is connect`)
    })
}