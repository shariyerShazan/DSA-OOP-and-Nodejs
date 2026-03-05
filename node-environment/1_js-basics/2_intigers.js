let a = 10 // it's a number
let b = 20
console.log(a+b) // it's print 30 //? it's addition

console.log("Sum of a and b is " + a + b) // it print "Sum of a and b is 1020" //? it's print string
console.log(a + b + " is Sum of a and b");  // it's print "30 is Sum of a and b" //? but is a string.
console.log("Sum of a and b is ", (a + b)); //it's print Sum of a and b is  30
console.log("Sum of a and b is " , a+b)  //it's print Sum of a and b is  30

let c = 11
let d = "12" //? it's a string
console.log(c+ d) // it's print 1112 //? it's a concatination

console.log(11 + Number(d)) //it's print 23

let e = 12
let f = "11"
console.log(f-e) //it's print -1
console.log(e-f) //it's print 1


let m = 4
let n = "3"
console.log(m*n) // it's print 12
console.log(12/"2") // it's print 6

//? Just + in string is not addition.. it's concationation.. and other thing works as it is.!



console.log(Number("shazan")) // it's print "NaN"

console.log(typeof(NaN)) // it's print number
console.log(typeof("11")) // it's print string
console.log(typeof(11)) // it's print number
console.log(typeof(m.toString()))  // it's print string