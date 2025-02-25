emptyArray = []
if(emptyArray.length!=0)
{
    console.log("Hello the array is Empty")
}


obj1 = {}

if(Object.keys(obj1).length==0)
{
    console.log("The object is empty")
}





// Nullish Coalescing Operator (??): null undefined

let Val1;
// Val1 = 5 ?? 10;
// Val1 = null ?? 10 
Val1 = undefined ?? 100 ?? null
console.log(Val1)

/*
So basicaly the Nullish Coalescing operator checks if there is any null value or not. If there 
is any null value then it will not print the null value.
It will print other value that is not null or not undefined
*/










//Terniary Operator
// Syntax:  condition ? true : false

const price = 800;
price >700 ? console.log("True Statement") : console.log("False Statement");

