


//STREAMS in node js
/*
A stream is a sequence of data that is being moved from one point to another
over time

Process Streams of data in chunks as they arrive instead of waiting for the entire data 
to be available before processing

The data arrives in chunks and you watch in chunks while the rest of the data arrives over 
time

The contents arrive in chunks and you transfer in chunks while the remaining 
contents arrive over time

Streams helps to prevent unnecessary data dowloads and memory usage


-->Streaming means listening to music or watching video in 'real-time', instead of dowloading a 
file to your computer and watching it later


Each type of stream is an EventEmitter instance and throws several events at different instance of times
For example, Some of the commonly used evnts are-:

1> Data- This event is fired when there is data available to read
2> end- This event is fired when there is no more data to read
3> error- This event is fired when there is any error receiving or writing data
4> finish- This event is fired when all the data has been flushed to underlying system

*/

//BUFFER in node js
/*
A Buffer is a raw binary data storage in node js --> Used behind the scenes when you read 
from streams, work with files, or deal with binary protocals (e.g TCP, images)
*/

const  fs = require("fs")
const http = require("http")


const server = http.createServer();
server.on("request",(req,res) =>{
    const rstream = fs.createReadStream("inpu.txt");
    rstream.on('data',(chunkData)=>{
        res.write(chunkData);
    });

    rstream.on('end',()=>{
        res.end();
    })
    rstream.on('error',(e)=>{
        res.end("File is not found on the DataBase")
    })

})

server.listen(8000)








const buffer = new Buffer.from("Sangam Silwal");
console.log(buffer)
console.log(buffer.toJSON());