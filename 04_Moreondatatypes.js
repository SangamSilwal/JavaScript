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


/*
Stack and heap memory concept in javascript

Stack(Primitive)
Heap(Non-Primitive)

In stack the variables use different references
But while dealing with objects, arrays and function which are non-primitive
and use heap memory then the item has the same reference. So change 
in one reference can also change other
*/

let myname = "Sangam";
let yourname = myname;
yourname = "Silwal";

console.log("Myname",myname);
console.log(yourname);

let obj = 
{
       email :"SangamSilwal@gmail.com",
       id:5656
}
console.log("Before Changing: ",obj)

let obj2 = obj;
obj2.email = "silwalSangam@gmail.com";
console.log("After Changing: ",obj);