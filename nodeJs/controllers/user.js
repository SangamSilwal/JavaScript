const User = require('../models/user')

async function handleGetAllUsers(req,res)
{
    const allDBusers = await User.find({})
    return res.json(allDBusers)
 
}

async function handleGetUserById(req,res)
{
    const db = await User.findById(req.params.id);
    if(!db) return res.status(404).send("User not found");
    res.send(db);
}

async function handlePatch(req,res)
{
    await User.findByIdAndUpdate(req.params.id, {name: "UpdatedName"});
    return res.json({"Status":"Success"});
}

async function handleDeleteUser(req,res)
{
    await User.findByIdAndDelete(req.params.id);
    return res.status(201).json({msg: "Success"})
}

async function handlePostRequest(req,res){
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
}

module.exports = {
    handleGetAllUsers,
    handleGetUserById,
    handlePatch,
    handleDeleteUser,
    handlePostRequest,

}