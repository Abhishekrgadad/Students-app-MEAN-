const express = require('express');

const app = express();

const PORT = 3000;

app.get('/',(req,res)=>{
    res.send('<h1>Welcome to Students API</h1>')
})


app.listen(PORT, (error)=>{
    if(!error){
        console.log("Server is successfully running at port", PORT);
    }
    else{
        console.log("An error occured:", error);
    }
})