function sayMyname()
{
    console.log("Hello my name is sangam");
}

// sayMyname ---> This is the reference of the function
// sayMyname() ---> this is the called function

function loginUserMessage(username)
{
    if(!username){
        console.log("Please enter a user name")
        return
    }
    return `${username} just logged in`
}

/*
IN function we can also give a default value
function loginUserMessage(username = "Sam") --> here the sam is the default username

if no username was given then it will return undefined 
so we checked the stuff using if(!username)

*/






/*
In JavaScript While using function we can also give multiple value to the function
We can use rest or spread operater i.e ... (3 dots)

Note: The spread operator will return a list hai tah
*/

function Numberhai(...num1)
{
    return num1
}

console.log(Numberhai(4,5,23,665,"Sangam"));   //--> It will return a list


// passing object in the function
function handleObj (obj)
{
    console.log(`Hi ${obj.name}`)
}
handleObj({
    "name":"Sangam Silwal"
})