/*
Building restful api using express

Tasks --->

GET/users -- list all the users
GET/users/1 -- list the user with id 1 
GET/users/2 -- list the user with id 2
GET/users/3 -- list the user with id 3
GET/users/:id --> :id is a dynamic way to approach id

POST/users -- Create a new user

PATCH/users/1 -- Edit the user with id 1

DELETE/users/1 -- Delete the user with id 1  

*/




const express = require("express");
const users = require("./MOCK_DATA.json");
const app = express();
const fs = require("fs");
const { json } = require("stream/consumers");

//using middleWare to get POST requests
app.use(express.urlencoded({extended: true}))





// app.use((req,res,next)=>{
//     console.log(req.path);
//     console.log("Hello this is from MiddleWare 1");
//     next();
// })

// app.use((req,res,next) => {
    
//     console.log("Hello this is from middleWare 2");
//     next();   // here the next is used to pass it to the next middleware
// })

const port = 8000;

app.get("/api/users", (req,res)=>{
    console.log(req.headers)
    return res.json(users);
    // console.log("Data Send");
})


app.get("/users",(req,res)=>{
    html = `
    <ul>
    ${users.map((user) => `<li>${user.first_name}</li>`).join("")}
    </ul>
    `
    res.send(html);
})

app.get("/api/users/:id",(req,res)=>{
    const id = Number(req.params.id);
    const user = users.find((user) => user.id === id);
    return res.json(user)
})

app.get("/api/users/name/:name",(req,res) => {
    const name = req.params.name;
    const user = users.find((user) => user.first_name === name);
    return res.json(user);
})

app.post("/api/users",(req,res) => {
    const body = req.body
    users.push({...body,id:users.length+1})
    fs.writeFile("./MOCK_DATA.json",JSON.stringify(users),(ress,data)=>{
        return res.json({status:"Completed"})
    })
})


//performing deleting operation
app.delete("/api/users/:id",(req,res) => {
    const id = Number(req.params.id);
    user_id = users.find((user) => user.id === id);
    users.push(users.splice(Number(user_id.id),1));
    fs.writeFile("./MOCK_DATA.json",JSON.stringify(users),(err,data) => {
        return res.json({"Status":"Success","id":user_id.id})
    })
})

app.listen(port,()=>{
    console.log("Hey listening to the current port "+port);
})