const mongoose = require('mongoose');

 const dbConnection = async() => {

    try{
        console.log(process.env.DB_CNN)
        await mongoose.connect(process.env.DB_CNN,{
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('DB ONLINE');
    }catch(error){
        console.log(error);
        throw new Error('Error ver logs');
    }
    
}

module.exports = {
    dbConnection
}