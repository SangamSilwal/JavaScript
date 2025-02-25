const numArray = [1,2,3,4,5,6,7,8,9,10]
neww = numArray.map((item) => (item*10))   
console.log(neww)

//Note: Map automatically return a value
//Chaining of the methods
new_num = numArray.map((value) => (value*10)).map((item) => (item*10)).filter((value) => value>567)
console.log(new_num)