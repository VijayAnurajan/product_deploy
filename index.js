const express=require("express");
const app=express();

const mongoose=require('mongoose');

mongoose.connect('mongodb+srv://vijayanurajan:vijay1651@mycluster1651.ls3c7.mongodb.net/?retryWrites=true&w=majority&appName=MyCluster1651')
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
