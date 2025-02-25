const coding = ["js","ruby","python","cpp","merger"]
/*
Calling callback function using forEach
This method of printing each element of the function is called callback method
*/


// coding.forEach(function (val){
//     console.log(val)    
// })


// using arrow function
coding.forEach((value) => (console.log(value)))

function printMe(item)
{
    console.log(item)
}
coding.forEach(printMe)    //=====> the reference of the function is given



// giving item,index and full array
coding.forEach((item,index,arr) => (console.log(item,index,arr)))
/*
The output of the above methode is
js 0 [ 'js', 'ruby', 'python', 'cpp', 'merger' ]
ruby 1 [ 'js', 'ruby', 'python', 'cpp', 'merger' ]
python 2 [ 'js', 'ruby', 'python', 'cpp', 'merger' ]
cpp 3 [ 'js', 'ruby', 'python', 'cpp', 'merger' ]
merger 4 [ 'js', 'ruby', 'python', 'cpp', 'merger' ]
*/














// Using Array of objects in javaScript

arrayOfobject = [
    {
        languageName:"JavaScript",
        languageFile:".js"
    },
    {
        languageName:"Java",
        languageFile:".java"
    },
    {
        languageName:"Python",
        languageFile:".py"
    }
]

arrayOfobject.forEach((item) => (console.log(`Language Name is ${item.languageName}`)))
arrayOfobject.forEach((item) => (console.log(`File name is ${item.languageFile}`)))


