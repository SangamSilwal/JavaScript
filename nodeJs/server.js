const { createServer } = require('node:http');

const hostname = '127.0.0.1';
const port = 3000;

const server = createServer((req,res) => {
    res.statusCode = 200;
    res.setHeader('Content-type','text/plain');
    res.end('hello from serbver');
});

server.listen(port,hostname,()=>{
    console.log("Server is runnign ");
})