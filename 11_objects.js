// singeleton
const obj1 = new Object()
//This type of decalring is called singeleton Decalring
obj1.name = "Sangam Silwal";
obj1.class = "Bei Pulchowk";
obj1.islogin = false;

// console.log(obj1);

// objects inside objects
const obj2 = 
{
    email : "someone@gmail.com",
    names : {
        fullname : {
            name : {
                first_name : "Sangam",
                last_name: "Silwal",
            }
        }
    }
}
console.log(obj2.names.fullname.name.first_name);
// for safety we have here
console.log(obj2.name?.name)  //--> This will ensure that the obj2 has name if not it will prevent from error






// Merging two or more than two objects 
const obj3 = {1:"a",2:"b"};
const obj4 = {3:"a",4:"b"};
const obj5 = {5:"a",6:"b"};
const obj6 = {7:"a",8:"b"};

console.log({obj3,obj4,obj5,obj6});  //-->This will return the object inside the object
// using assign
const assignObj = Object.assign({},obj3,obj4,obj5,obj6)  //-->This will assign all the objects into the empty object {}
// console.log(assignObj)

// using spread function
const spreadObj = {...obj3,...obj4,...obj5,...obj6} //-->This is highly recommended method for obj concatenation
console.log(spreadObj)







// We can also create list of objects
const arrayofobject = [
    {
        name:"Sangam Silwal",
        loggedIn :true,
    },
    {
        name:"subash Silwal",
        loggedIn :true,
    },
    {
        name:"subodh Silwal",
        loggedIn :true,
    }
]
// console.log(arrayofobject)
console.log(arrayofobject[2].name)







// keys values and entries
console.log(Object.keys(obj1)) //-->returns list of keys
console.log(Object.values(obj1)) //--> return list of values
console.log(Object.entries(obj1))   //-->This will print 2D list of key value pair





console.log(obj1.hasOwnProperty("surname"))  //--> It will return true or false 






// de-Structuring of objects in js
const course = {
    courseInstructure :"Sangam Silwal",
    courseLifeSpan :"7 months",
    courseVavaiVlable :true
}

const {courseInstructure} = course
const {courseLifeSpan} = course
//This is called de-Structuring of Objects in js
// To make it even shorter to access we can do is
const {courseVavaiVlable : av} = course
console.log(av)
console.log(courseLifeSpan)