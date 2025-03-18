const express = require('express')
const userRouter   = require('./routes/user')
const {connectMongoDB} = require("./connections")




//connecting mongodb 
//we need to use .then and catch as it is a asynchronous task
connectMongoDB("mongodb://127.0.0.1:27017/Engiuru")
.then(()=> console.log("Mongo DB connected Succesfully"))
.catch((error)=> console.log(`Error in connecting DB ${error}`))


//initializing the express app
const app = express()
const port = 8000


//middleWare
app.use(express.urlencoded({extended: true}))





app.use("/user",userRouter);

app.listen(port,()=>
{
    console.log(`Listening to the port ${port}`);
})