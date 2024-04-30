const mongoose = require('mongose');

const connectDatabase =()=>{
    mongoose.connect(process.env.DB_LOCAL_URI)
}