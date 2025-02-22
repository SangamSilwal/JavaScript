let myArray = new Array(1,4,2,8,5,6,9,0,67);
console.log((myArray));
console.log(myArray[0]);


// Array Methods

//push
myArray.push(9);
myArray.push(0);
console.log(myArray);

//pop
myArray.pop();
console.log(myArray);

//unshift
myArray.unshift(8);   //add 8 in the first
console.log(myArray);

//shift
myArray.shift()   //delect array 1st element
console.log(myArray);

// includes 
console.log(myArray.includes(999)); //returns true and false
console.log(myArray.indexOf(99));  // If 99 not present then gives -1

const newArr = myArray.join();
console.log(typeof newArr)  //--> This will return a string

//slice and splice

const arr2 = new Array(1,2,3,4,5,6,7,8,9,10);
console.log(arr2.slice(2,5))

console.log(arr2.splice(2,3))   //Note splice will take one element more
// Also splice will rearrange the original array
console.log(arr2)



