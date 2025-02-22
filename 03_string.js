let str1 = "Sangam";
let str2 = "Silwal";
let str3 = str1+str2;

console.log(str3);
console.log("1"+"4");


console.log(+true);   //This will print 1
console.log(+"");   //This will print 0

console.log(1+1+"4");   //This will print 24


//comparison of datatypes in javascript

console.log(null >0);  //False
console.log(null == 0);  //false
console.log(null >= 0);  //true
/*
This is because the javascript converts the null to 0 and then start to compare while using comparison operator
*/



//basically in javascript if we comapare the string like 
// "2" === 2 this is called strict comapring because this will compare the datatype of the varaible also 