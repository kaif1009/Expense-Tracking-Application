//IMPORT THE EXPRESS
const express=require('express');
//INITIALISE THE PORT NUMBER


//IMPORT THE CORS BY THIS  easily access the server--
const cors=require('cors')//cross origin and resource sharing
//CREATE THE APP by this find the node js application in framework of js
const app=express();
//read the information in specefic directory--
const {readdirSync}=require('fs')

require('dotenv').config()
const PORT=process.env.PORT
const { db } = require('./db/db');

//middleware--function----
app.use(express.json());
app.use(cors());//easily accessing the server

//routes
readdirSync('./routes').map((route)=>app.use('/api/v1',require('./routes/'+route)))


const server=()=>{
    db()
    app.listen(PORT,()=>{
        console.log('Listening on port ',PORT);
    })
}
server()