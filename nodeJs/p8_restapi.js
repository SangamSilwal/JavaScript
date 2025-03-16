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

const port = 8000;

app.get("/api/users", (req,res)=>{
    return res.json(users);
    console.log("Data Send");
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

app.listen(port,()=>{
    console.log("Hey listening to the current port "+port);
})