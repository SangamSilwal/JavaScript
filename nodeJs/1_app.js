/*
Globals - No window
__dirname - path to the current directory
__filename - file name
require - function to use modules (Common Js)
process - info about env where the profram is being executed
*/

// console.log(__dirname);
// setInterval(()=> console.log("hello world"),1000)



// //modules in node
// const john = 'john'
// const peter = 'peter'



// const sayHi = (name) => {
//     console.log(`hello ${name}`);
// }

// sayHi(john)
// sayHi(peter)

const p1 = require("./p1_modules")

p1.greet()
p1.namaste( )