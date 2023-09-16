
const express = require('express')
const dotenv = require('dotenv').config();
const connectDb =require('./config/db')
const app =express()
const bookRoutes = require('./routes/mainRoutes'); 
app.use(express.json());

app.use('/books', bookRoutes);

const port=process.env.PORT ||5000;
app.listen(port,'localhost',()=>{
    connectDb(),
    console.log(`server is start on ${port}`)
})
