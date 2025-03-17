/*
Middleware functions are the functions that have access to the request object , the respose object
and the next middleware function in the applications request-response cycle


Middleware functions can perform the following tasks:

Execute any code.
Make changes to the request and the response objects.
End the request-response cycle.
Call the next middleware function in the stack.

*/


const express = require('express')
const fs = require('fs')
// const users = require('./MOCK_DATA.json')


const app = express();

app.get('/',(req,res) => {
  

})

app.listen(8000,()=>{
    console.log("App is listening")
})