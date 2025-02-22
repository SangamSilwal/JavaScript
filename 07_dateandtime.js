// Date and Time in js

let myDateObj = new Date()  //By using new Date we are creating a object 
console.log(myDateObj);
console.log(typeof myDateObj);

// For printing in Formatted Way we use
console.log(`Using toString method --> ${myDateObj.toString()}`);
console.log(`Using toDateString method --> ${myDateObj.toDateString()}`);
console.log(`using tolocaleString methof --> ${myDateObj.toLocaleDateString()}`);

let mydate = new Date(2006,0,26);
console.log(mydate.toDateString())
//Note: In js while give date like above the 1st months starts with 0

let myanotherdate = new Date("03-25-2006");
console.log(myanotherdate.toDateString());

let timeStamp = Date.now()
console.log(timeStamp)
console.log(myanotherdate.getFullYear());
console.log(myanotherdate.getDay())

let trial = myanotherdate.toLocaleString("default",{
    weekday: "long",
})
console.log(trial)