//IMPORT THE MONGOOSE
const mongoose=require('mongoose');

const db = async()=>{
    try{
        mongoose.set('strictQuery',false)
        //connection to the mongo db dataBase
        await mongoose.connect(process.env.MONGO_URL)

        console.log('DataBase connected')
    }catch(error){
        console.log('DataBase Connection Error')
    }
    }
module.exports={db}