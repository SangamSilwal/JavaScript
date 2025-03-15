const fs  = require("fs")
// console.log(fs)


//fs is a module for reading and writing with files in javaScript


//sync .... 
// fs.writeFileSync("./test.txt","Hello this is written syncn")
//sync always returns some value

//Async
// fs.writeFile("./test.txt","HEllo this is written aynch",(err)=>{});
//Note: The async always takes a callback 
//Asynch is always a void type


//Reading file Synch and Asynch

//Reading Synch 
//While reading synch it always return something
// const readedSynch = fs.readFileSync("./test.txt","utf-8");
// console.log(readedSynch)


//Reading Asynch
//Note: While reading Asynch it donot returns something
// fs.readFile("./test.txt","utf-8",(err,result)=>{
//     console.log(result)
// })

//appending file in nodejs 
fs.appendFileSync("./test.txt",`Hey their the time is ${Date.now()}\n`)

//copying file in nodejs
// fs.cpSync("./test.txt","./copied.txt")

//Deleting file in nodeJS
// fs.unlinkSync("./copied.txt")


//Getting information about a certain file in nodejs
console.log(fs.statSync("./test.txt"))  //....---> It gives the information about the file in node js

//Making folder in node js
// fs.mkdirSync("myDoc/a/b",{recursive: true})   //---> It will make a folder named as myDoc and subfolders a and b
