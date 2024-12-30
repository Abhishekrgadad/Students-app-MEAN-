const express = require('express');
const cors = require('cors');
const app = express();

const PORT = 3000;

//enable cors
app.use(cors());

//enable json parser
app.use(express.json());

//routes to student API
const studentRoutes = require('./routes/students');

//use the routes
app.use('/api/students', studentRoutes);

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