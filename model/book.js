const mongoose =require('mongoose')
const bookSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    quantity:{
        type:String,
        required:true
    },
    authorName:{
        type:String,
        required:true
    }
})
const Book = mongoose.model('Book',bookSchema)
module.exports ={Book}
