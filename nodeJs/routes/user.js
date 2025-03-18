const express = require('express')
const router = express.Router();



//exporting different functions from controllers
//Here the controllers intereact with the db
const {handleGetAllUsers,handleGetUserById,handleDeleteUser,handlePatch, handlePostRequest} = require("../controllers/user")








//sending api of the user
router.get("/",handleGetAllUsers)


// Routing and performing some crud operation
router.route("/:id")
.get(handleGetUserById)
.patch(handlePatch)
.delete(handleDeleteUser)


//creating post request for creating a user
router.post("/",handlePostRequest)

module.exports = router

