/*
Immediately Invoked Function Expression
*/

(function chai(){
    console.log("IIFE hai tah");
}());

((name) => {
    console.log(`hello ${name} How are you`)
})("Sangam");


/*
This type of function are called IIFE.
For writing two IIFE function we should be carefull about the semicolon

Application:

1--->It creates an extra scope of variables, which helps to confine variables to the place where they are useful.
2--->It is now an expression instead of a sequence of statements. This allows you to write complex computation logic when initializing variables.
*/