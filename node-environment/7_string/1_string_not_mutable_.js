let arr = [ 0 , 39 , 93 , 45 , 32, 67 , 9 , 56]
arr.push(100)
console.log(arr) // [ 0 , 39 , 93 , 45 , 32, 67 , 9 , 56 , 100]
arr[0] = 100
console.log(arr)// [ 100 , 39 , 93 , 45 , 32, 67 , 9 , 56 , 100]


//! but it's push pop not work in the string
 
let name = "shazan"
// name.push("f") //! error
console.log(name) // shazan
console.log(name[0]) // s
console.log(name[4]) // a

//! concarinate 
let firstName = "shariyer"
console.log(firstName + " shazan") // shariyer shazan

//! or
let fName = "atiya"
 fName += " Priya"
 console.log(fName) // atiya Priya