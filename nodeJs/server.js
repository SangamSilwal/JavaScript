const express = require('express')
const mongoose = require('mongoose')




const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required : true
    },
    region: {
        type: String,
        required : true
    },
    gender: {
        type: String
    },
    email : {
        type: String,
        required: true,
        unique: true
    }

},{timestamps: true})



const User = mongoose.model("user",userSchema)




//connecting mongodb 
//we need to use .then and catch as it is a asynchronous task
mongoose.connect("mongodb://127.0.0.1:27017/Engiuru")
.then(()=> console.log("Mongo DB connected Succesfully"))
.catch((error)=> console.log(`Error in connecting DB ${error}`))






//initializing the express app
const app = express()
const port = 8000

app.use(express.urlencoded({extended: true}))

app.get("/",(req,res)=>{
    console.log("Listening")
    return res.end("Hey there how you doing")

})

//sending html of the users
app.get("/users", async (req,res)=>{
    const allDBusers = await User.find({})
    const html = `
    <ul>${allDBusers.map((user)=>`<li>${user.name}</li>`).join(" ")}
    
    </ul>
    `
    res.send(html)
})



//sending api of the user
app.get("/api/users", async (req,res)=>
{
    const allDBusers = await User.find({})
    return res.json(allDBusers)

})



// Routing and performing some crud operation
app.route("/change/users/:id")
.get(async (req,res)=>{
    const db = await User.findById(req.params.id);
    if(!db) return res.status(404).send("User not found");
    res.send(db);
})
.patch(async (req,res)=>{
    await User.findByIdAndUpdate(req.params.id, {name: "UpdatedName"});
    return res.json({"Status":"Success"});
})
.delete(async (req,res)=>{
    await User.findByIdAndDelete(req.params.id);
    return res.status(201).json({msg: "Success"});
})


//creating post request for creating a user
app.post("/users",async (req,res) => {
    const body = req.body
    if(!body || !body.name || !body.region || !body.email){
        return res.status(400).json({msg: "Missing fields"});
    }
    const result = await User.create({
        name: body.name,
        region: body.region,
        gender: body.gender,
        email: body.email,
    });
    console.log(result)

    res.status(201).json({msg: "Succesfully created"})

})



app.listen(port,()=>
{
    console.log(`Listening to the port ${port}`);
})