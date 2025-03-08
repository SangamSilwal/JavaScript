function Product(name,price){
    this.name = name
    this.price = price
    return this
}


Product.prototype.increasePrice = function(){(this.price++)}
Product.prototype.PrintMe = function(){(console.log(`The product is ${this.name} and its price is ${this.price}`))}

const one = new Product("chai",25)
one.increasePrice()
one.increasePrice()
one.PrintMe()
console.log(one)
console.log(typeof one)

/*
Here is what happens behind the scenes when new keyword is used:

A new object is created: A new keyword initiatate the creation of new JavaScript object

A prototype is linked: 
The newly created object gets the linkd to the protype property of the constructor function
This means that it has access to properties and methods defined on the constructor's prototype


*/





//Now lets discuss about prototype in js
const array = ["Sangam","Silwal"]

const obj = {
    username: "Sangam",
    roll: 35
}
Object.prototype.SaySangam = function(){
    console.log("Hey sangam How you doing")
}
array.SaySangam()
obj.SaySangam()



Array.prototype.saySilwal = function(){
    console.log("Hey silwal how you doings")
}

array.saySilwal()
// obj.saySilwal()    it will show error as saySilwal is associated with obj only

try {
    obj.saySilwal()
} catch (error) {
    console.log(`OOOPS error hapenning ----> ${error}`)
}





// Also we can have inheritance of the objects
const teachingSupport = {
    available: true

}
const TASupport = {
    makeAssign : 'JS COURSE',
    fullTime: true,
    // __proto__: teachingSupport   ---> we can link to the teacingSupport objects this way also
}

//modernSyntax
Object.setPrototypeOf(TASupport,teachingSupport);
console.log(TASupport.available)   //---> it will return true





//Exercise

let namee = "Sangam Silwal"
console.log(namee.length)

String.prototype.gettrueLength = function(){
    console.log(this)

    ///meaning if this is (Josle call garyo tei ho)
}
namee.gettrueLength()


