// lets talk about concat and spread in js

const array1 = new Array("Sangam","Sugam","Rohan","Bajha");
const array2 = new Array("Silwal","Silwal","Upadhye","Rayamajhi");

//array1.push(array2);  //--> It will push the array in the array1
/*
This type of pushing is not preferable
Output is :
[
  'Sangam',
  'Sugam',
  'Rohan',
  'Bajha',
  [ 'Silwal', 'Silwal', 'Upadhye', 'Rayamajhi' ]
]
*/

console.log(array1,array2)

// using concat 
const arrayConcated = array1.concat(array2)  // --> Note: Concat method will return a new array
console.log(arrayConcated)


// Spreading method
const arraySpread = [...array1, ...array2];
console.log(`Array formed by Spreading is \n ${arraySpread}`)
console.log(arraySpread)
// through spreading method we can also concat multiple arrays


// flat method
const different_dim_array = [1,2,3,[3,4,5],2,[3,4,[99,900]]]
console.log(different_dim_array)
// we can flat this array into one dimensional array by using flat
//Means It will return a new array with all the subelement 
console.log(different_dim_array.flat(Infinity))


console.log(Array.isArray("Hiteah"));  //Returns False
console.log(Array.from("Sangam"))   //->Creates an Array

let name1 = "Sangam"
let name2 = "Silwal"
let name3 = "Durgesh"

const nameHaru = (Array.of(name1,name2,name3))  //-->Creates an Array
let newArray = new Array();
for(let i=0;i<3;i++)
{
    newArray.push(nameHaru[i].toUpperCase());
    
}
console.log(newArray)

