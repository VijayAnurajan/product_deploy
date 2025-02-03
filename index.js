const express=require("express");
const app=express();

const mongoose=require('mongoose');

mongoose.connect('mongodb://localhost:27017/')
    .then(()=>{
        console.log("Connected to MongoDB");
    })
    .catch((Error)=>{
        console.log("Error");
    })


app.listen("9000",()=>{
    console.log("server is running on port 9000");
})

app.get('/',(req,res)=>{
    // res.send("Hello World");
    // res.json(person)
})

// const person={
//     sname:"Sasi",
//     regno:"119"
// }