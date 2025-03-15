function greet()
{
    console.log("Hello this is greeting from pa_modules.sj")

}

function namaste()
{
    console.log("Hello namaste Everyone")
}


module.exports = {greet,namaste}   //---> This is a way to export a function in node js


/*
There are many built in modules in nodejs
For example their is fs and http module
while importing module if we use ./<Module_name> then nodejs will search in the current file
*/

