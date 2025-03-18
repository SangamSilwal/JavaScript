const server = require("http")
const fs = require("fs")
const url = require("url")



const newServer = server.createServer((req,res)=>{
    if(req.url === "/favicon.ico") return res.end();
    const text = `Hello --${req.url}--Time: ${Date.now()}\n`
    const myUrl = url.parse(req.url,true)

// here the myUrl constain the parse value i.e ?search_id=899&name=ibiyank ---> Like this values

    console.log(myUrl)
    fs.appendFile("test.txt",text,(err,result)=>{
        switch (myUrl.pathname){
            case "/":
                res.end("<h1>Home</h1>");
                break;
            case "/about":
                const name = myUrl.query["nma"]
                res.end(`<h1>Hi ${name}</h1>`);
                break;
            case "/signUp":
                if(req.method === "GET") return res.end("This is a sign up form")
                else if(req.method === "POST"){
            //DB query
            
                }
            default:
                res.end("404 Not found");
                break;
        }
    })

})

newServer.listen(8000,()=>{
    console.log("Listening to the port 8000")
});