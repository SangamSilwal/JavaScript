// Number in js
// Like string there are lot of Number Functions

const num1 = new Number(7836664551515);
console.log(num1);
console.log(num1.toLocaleString())
console.log(num1.toLocaleString("en-IN"))


const num2 = new Number(2256.34);
console.log(num2.toPrecision(4));


//++++++++++++ Maths funtion in js +++++++++++//

console.log(Math);
console.log(Math.random())  //Gives a random value between o to 1

console.log(Math.ceil((Math.random()*10) +1))

/*
we Have Function like ceil round floor etc
abs 
*/
console.log(Math.abs(-3))