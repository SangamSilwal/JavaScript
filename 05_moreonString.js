const name = "Sangam Silwal";
const repoCount = 50;

// console.log(name + repoCount + " Value")

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);
// follow this syntax now on

//There are a lot of string methods 

let string1 = String("Hello sangam Silwal");
console.log(string1.toLowerCase());
console.log(string1.toUpperCase())
console.log(string1.charAt(3));
console.log(string1.indexOf('o'));

const newString = String("Hello Ram how are you");
console.log(newString.substring(0,8));
console.log(newString.slice(-2,2));


// trim in js
const email = "   Sangam     Silwal    ";
console.log(email.trim());  // This will just trim the left and right og the sentence

//replace in js
console.log(email.replace("Sangam","Sugam").trim());
//include in js
console.log(email.includes("Sangam"));   //this will return true because this contains sangam in the email
console.log(email.includes("Mojito"));  // This will return false because this doesnot containes sugam

//split function in js
const nameSplit = "Sangam-Silwal-Is-My-Name";
const aray = nameSplit.split("-");
console.log(aray);

console.log(aray.includes("Silwal"));