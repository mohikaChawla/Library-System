const mongoose =require('mongoose');

const connectDb=async()=>{
    try{
        const conn=await mongoose.connect(process.env.MONGOURL)
        console.log('mongodb is connected')

}
catch(error){
    console.log(error),
    process.exit(1)
}
}
module.exports = connectDb;