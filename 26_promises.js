// Promises in javaScript
/*
A Promise is an object
 representing the eventual completion or failure of an asynchronous operation



Promises in JavaScript are used to handle asynchronous operations. 
They allow you to write cleaner, more manageable code when dealing with tasks 
that take some time to complete,
 such as fetching data from an API, reading files, or interacting with a database.
*/


//creating a promise
const promiseOne = new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Printed after 2 seconds");
        resolve()
    },1000)
    
})


promiseOne.then(function(){
    console.log("promise consumed");
})



//another way to create promise
new Promise(function(resolve,reject){
    setTimeout(function(){
        // console.log("This is first printed");
        resolve();
    },3000)  
}).then(function(){
    // console.log("This is last printed")
})

//The parameter we passed to the resolve is returned in the function after then--->


const promiseTwo = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = false
        if(!error){
            resolve({username:"Sangam",password:"IamsangamSilwal"});
        }
        else{
            reject("Soory There is some error");
        }
    },2000)
})


//This is called chaining of the promises
promiseTwo
.then((user) => {
    console.log(user)
    return user.username
})
.then((usernameOnly)=>{
    console.log(usernameOnly);
})
.catch(function(error){
    console.log(error);
}).finally(()=> console.log("Finally this is always printed"))
//In order to print the returned value we used then again


/*
So basically while consuming the promise we can also we 
async await method
*/

const promiseThree = new Promise(function(resolve,reject){
    setTimeout(()=>{
        let err = false
        if(!err)
        {
            resolve("Hey this is printed using aynch await");
        }
        else{
            reject("ERROR: We gotch some error buddy");
        }
    },4000)
})

//using asych await function
async function consumedPromiseThree(){
    try{
        const response = await promiseThree   //await keyword is used to pause the execution of an aynch function until the promise is resolved
        
        console.log(response);
    } 
    catch(error)
    {
        console.log(error)
    }
}
consumedPromiseThree()








//We can for sure perform this below code using then and catch
async function letsFetchSomeJson(){
    try {
        const response  = await fetch('https://jsonplaceholder.typicode.com/users')
        const jsonFormat = await response.json()
        console.log(jsonFormat);
    } catch (error) {
        console.log(`ERR: ---> ${error}`);
    }
}

letsFetchSomeJson()