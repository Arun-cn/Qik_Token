const express =  require('express');
const cors = require('cors');
const bodyParser = require("body-parser"); 
const app =  express();
const connectToDatabase = require("./utils/db.js");

const db = connectToDatabase();

const port = process.env.PORT || 3000 ;

app.listen(port,(req,res)=>{
    console.log(`server started port: ${port}`);
});