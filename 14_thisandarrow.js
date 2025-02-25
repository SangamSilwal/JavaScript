/*
this:
    this in js refer to the current stuffs
*/
const user = 
{
    username :"Sangam Silwal",
    price : 999,
    welcomeMessage : function()
    {
        console.log(`Hi ${this.username} How are you doing`);
        console.log(this)
    }
}

// user.welcomeMessage()
// user.username = "Sugam Silwal"
// user.welcomeMessage()
// console.log(`Outer this is ${this}`)
// console.log(this)







/*
Arrow Function in js
*/

const hello = () =>{
    let username = "Sangam";
    console.log(this)
}


//explicit return
const addTwoNum = (num1, num2) => {
    return num1+num2;
}
console.log(addTwoNum(4,5))



//Now using implicit return of arrow function
const addtwonumByarrow = (num1,num2) => (num1+num2);   //It automatically return the sum without return keyword
console.log(addtwonumByarrow(4,5))

const returnObj = () => ({"username":"Sangam Silwal"})
console.log(returnObj())


/*
An arrow function expression is a compact alternative
 to a traditional function expression, with some semantic
  differences and deliberate limitations in usage: 
  Arrow functions don't have their own bindings to this ,
 arguments , or super , and should not be used as methods.

*/













