array1 = [2,67,22,8,5,3,0]
for (const element of array1) {
    // console.log(element)
}
const gretting = "Hello World!";
for (const element of gretting) {
    // console.log(element)
}







//Map
/*
Map objects are collections of key-value pairs.
 A key in the Map may only occur once; it is unique in the Map's collection
 */
const map = new Map()
map.set('IN','India')
map.set('USA','United Structure of America')
map.set('Fr','France')
map.set('IN','INdia')    //-->map only takes a unique key the above IN India will not be printed
console.log(map)
/*
for (const key of map) {
    console.log(key)  --> This will return a list of the each map
}
*/
for(const [key,value] of map)
{
    console.log(`${key} :- ${value}`)  //-->It will return the key value pair from the map
}


// Note: Using map with for in doesnot give anything because map are not iterable









// deleting properties in js objects
let obj = {
    name:"Sangam Silwal",
    roll:"081bei035",
    hobby: "Trading"
}

console.log(obj)
delete obj.hobby
console.log(obj)

// for (const element of obj) {        ------->>> The obj is not iterable like this
//     console.log(obj) 
// }