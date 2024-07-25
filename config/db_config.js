const mongoose = require('mongoose');

const connectdb = async () => {
    try{
        await mongoose.connect(process.env.DATABASE_URI, {
            useUnifiedTopology: true,
            useNewUrlParser: true
        })
    }catch(err){
        console.log(err)
    }
    
}

module.exports = connectdb;