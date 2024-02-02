const mongoose = require('mongoose');
require('dotenv').config();



const port = process.env.PORT;
const mongooseURI = process.env.MONGO_URI;

console.log('Port:', port);
console.log('MongoDB URI:', mongooseURI);



const connectDB = async () => {
    try{
        // mongodb connection string
        const con = await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true
        })

        console.log(`MongoDB connected : ${con.connection.host}`);
    }catch(err){
        console.log(err);
        process.exit(1);
    }
}

module.exports = connectDB 