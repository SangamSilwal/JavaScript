

// Decalaring outside the block is called global Scope
let a = 300

if(true)
{
    let a = 10
    const b = 20
    var c = 30
}

/*
Here the a,b are block scope and cannot be access from outside of the block
*/
// console.log(a)
// console.log(c)  //--> var still prints






function one()
{
    const username = "hitesh"
    function two()
    {
        const website = "youtube"
        console.log(username);  //--> We can access the parent block from child block
    }
    two()
    // console.log(website);   --> We cannot access the child block variables from parents blocl
    
}








/*
Function defining Process in Java Script
*/
console.log(addone(5))    //--> This will Execute and there is no any error
function addone(num)
{
    return num+1;
}

// console.log(addtwo(5))   --> This will return an error
const addtwo = function(num)
{
    return num+2;
}
/*
So the overall concept is:   Note: This thing is call hoisting
    Defining Function inside a variable and calling it above the defination line will make an error
    But defining function normally and calling the function above its defination will not make an error 
*/






