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