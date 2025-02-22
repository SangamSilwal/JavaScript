//Object Literals -->Non singeleton Object
const sym = Symbol("text1");
const JsUser = 
{
    name: "Sangam",
    "Full Name":"Sangam Silwal",
    // sym : "text2",  --> We cannot declare the symbol like this
    [sym]:"text2",  //-->as sym is a symbol
    age :18,
    location: "Balaju",
    email: "sangamSilwal2062@gmail.com",
    isloggedIn : false,
    logginDate : ["Sunday","Monday","Wednesday"],

}

//-->This are the objects 
console.log(JsUser.name); 
console.log(JsUser["name"])
console.log(JsUser["Full Name"])
console.log(typeof JsUser[sym])

JsUser.name = "Prasis";
console.log(JsUser.name)

// Object.freeze(JsUser)  //--> This will freeze the jsUser object from overwriting
// JsUser.name = "Sushant"; //--> the jsUser.name is not overwritten



JsUser.gretting = function()
{
    console.log("Hello from Gretting one")
}
JsUser.gretting2 = function()
{
    console.log(`Hello ${this["Full Name"]} How are you? `)
}
console.log(JsUser.gretting)  //This will give the reference of the greeting function 
// As it is done without ()
console.log(JsUser.gretting())
console.log(JsUser.gretting2())
console.log(JsUser) 