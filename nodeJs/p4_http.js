const http = require("http");
const fs = require("fs")
// const newServer = http.createServer((req,res) => {
//     console.log("New Req Rec");
//     console.log(req.headers);   //---> It will send all the information about the client 
//     res.end("Hello from the server");
// })

// newServer.listen(8000,()=> console.log("Server is listening "))


// Lets create our own log system



//Note: Always use non-Blocking operation i.e Asynch operation for dealing with many clients
const newServer = http.createServer((req,res)=>{
    fs.appendFile("log.txt",`Time : ${Date.now()}-- ${req.url}---New req Rec\n`,(err,result)=>{
        // res.end("Hello your records have been recorded succesfully");
        switch (req.url){
            case "./":
                res.end("Hey there you are in the home page");
                break;
            case "/about":
                res.end("Hi from about page");
                break;
            default:
                res.end("404 not found");
                break;
        }
    })
})

newServer.listen(8000,()=> console.log("Server is listening"))