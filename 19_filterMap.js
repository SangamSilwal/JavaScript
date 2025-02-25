/*
Using filter in JavaScript
*/

const numArray = [1,2,3,4,5,6,7,8,3]
numArray.forEach((item) => item>4)   //---> we cannot return a value using forEach method


// Filter method
console.log(numArray.filter((num) => (num>4))) //-->This will return the value Greater than 4
usinfArrow = numArray.filter((num) =>{
    return num>4
})
console.log(`Using Arraw ${typeof usinfArrow}`)




usingFunction = numArray.filter(function (num){
    return num>4
})
console.log(`Using Function : ${typeof usingFunction}`)


//using for each method
const newArray = []
numArray.forEach((item) => 
{
    if(item>4)
    {
        newArray.push(item)
    }
})
console.log(newArray)






const objectList = [
    {
        bookName: "Harry Potter", genre: "Fiction", publishedDate: 2006
    },
    {
        bookName: "The Alchemist", genre: "Philosophical Fiction", publishedDate: 1988
    },
    {
        bookName: "To Kill a Mockingbird", genre: "Classic", publishedDate: 1960
    },
    {
        bookName: "1984", genre: "Dystopian", publishedDate: 1949
    },
    {
        bookName: "The Hobbit", genre: "Fantasy", publishedDate: 1937
    },
    {
        bookName: "Pride and Prejudice", genre: "Romance", publishedDate: 1813
    },
    {
        bookName: "The Great Gatsby", genre: "Classic", publishedDate: 1925
    },
    {
        bookName: "The Catcher in the Rye", genre: "Literary Fiction", publishedDate: 1951
    },
    {
        bookName: "Moby-Dick", genre: "Adventure", publishedDate: 1851
    },
    {
        bookName: "Brave New World", genre: "Science Fiction", publishedDate: 1932
    }
];


// returnedList = objectList.filter((item) => (item.genre === "Science Fiction"))
returnedList = objectList.filter((item) => (item.publishedDate >1920))
console.log(returnedList);
