const express = require('express')


const router = express.Router();

router.get("/",(req,res)=>{
    console.log("Listening")
    return res.end("Hey there how you doing")

})





//sending api of the user
router.get("/", async (req,res)=>
{
    const allDBusers = await User.find({})
    return res.json(allDBusers)

})



// Routing and performing some crud operation
router.route("/:id")
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
router.post("/",async (req,res) => {
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

module.exports = router

