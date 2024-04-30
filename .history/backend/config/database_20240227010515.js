const mongoose = require('mongose');

const connectDatabase =()=>{
    mongoose.connect(process.env.D)
}