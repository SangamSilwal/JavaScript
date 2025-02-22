let i = 90;
i = String(i);
console.log(typeof i);


let j = null;
let m = undefined;

let b = true;

function toBool(i)
{
    i = Boolean(i);
    console.log(typeof i);
}

toBool(m);


let string = "77abs";
console.log(Number(string));

let string2 = "";
console.log(Number(string2));

let string3 = "";  
// here when the string is empty the boolean value is false
//  But When the string is not empty the boolean value is true
console.log(Boolean(string3));