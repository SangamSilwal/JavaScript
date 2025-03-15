//Importing express
const express = require("express");
const { Url } = require("url");

//initializing the express
const app = express();

app.get("/",(req,res)=>{
    res.send("Hello This is home Page");
})

app.get("/about",(req,res)=>{
    res.send("Hello from About page")
})

app.get("/info",(req,res)=>{
    res.send(`Hey ${req.query.name}`)
})

app.listen(8000,()=>{
    console.log("Listening to the express server");
})

