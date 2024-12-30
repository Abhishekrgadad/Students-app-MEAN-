const express = require('express');

const app = express();

const PORT = 3000;

//get the data
app.get('/',(req,res)=>{
    res.send('<h1>Welcome to Students API</h1>')
})

//listen to make the port into listening means working
app.listen(PORT, (error)=>{
    if(!error){
        console.log("Server is successfully running at port", PORT);
    }
    else{
        console.log("An error occured:", error);
    }
})