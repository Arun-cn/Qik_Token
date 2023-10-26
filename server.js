const express =  require('express');
const app =  express();

const port = process.env.PORT || 3000 ;

app.listen(port,(req,res)=>{
    console.log(`server started port: ${port}`);
})