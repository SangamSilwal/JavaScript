const num = [1,2,3]
let initialValue = 0;
const sum = num.reduce(function (accumulator, currentValue){
    return accumulator+currentValue;
},initialValue);
console.log(sum)

// using array function
const sum2 = num.reduce((accumulator,currentValue) => (accumulator+currentValue),0)
console.log(sum2)




//Example
const obj = [
    {
        course:"py course",
        price:789
    },
    
    {
        course:"js course",
        price:90
    },
    
    {
        course:"mobile dev course",
        price:9000
    },
    
    {
        course:"data Sciencce course",
        price:5000
    }
]
TotalCheckOut = obj.reduce((accumulator,item) =>(accumulator + item.price),0 )
console.log(TotalCheckOut)

//using for each
let a = 0;
obj.forEach((item)=>(a+= item.price))
console.log(a)