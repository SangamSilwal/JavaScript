/*
In javascript There are mainly two types of datatypes: 
1> Primitive Datatype
2> Non primitive Datatype or Reference Datatype
*/

// Primitive Datatyepe : String, Number, Boolean, Null, Undefined, Symbol, Bigint

const num = 23;
const num2 = 23.5;
let name = "Sangam";
const isloggedin = true;
const outSideTemp = null;
let userEmail = undefined;


const id = Symbol("abc");
const id2 = Symbol("abc");

console.log(id === id2);   //This will return false because using symbol will create some different values



//Non-primitive Datatype (Reference Datatype)
//Array object functions

/*

Return type of variables in JavaScript
1) Primitive Datatypes
       Number => number
       String  => string
       Boolean  => boolean
       null  => object
       undefined  =>  undefined
       Symbol  =>  symbol
       BigInt  =>  bigint

2) Non-primitive Datatypes
       Arrays  =>  object
       Function  =>  function
       Object  =>  object


*/

let a = BigInt(249349233432);
let array = [1,"Sangam",true,null,undefined,a];
console.log(array)


for(let i=0;i<5;i++)
{
    console.log(typeof array[i]);
}