let a = 11
a = a++ + ++a
console.log(a) // it's print 24

let b = true // 1
b= b++ + ++b 
console.log(b) // it's 4

let c = true
console.log(c++) // it's 1
let d = true
console.log(++d) // it's 2

// console.log(++10) it's error //! constant can't increment or decrement
// console.log(10++) it's error //! constant can't increment or decrement
let x = 10
// console.log((++(++x))) it's error .. //! constant can't increment or decrement