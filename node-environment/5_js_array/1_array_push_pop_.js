let arr = []
arr[0] = 5
arr[1] = 10
arr.push(15)
console.log(arr)// [ 5, 10, 15 ]  //! push mean add after the last index
arr.push("shazan")
console.log(arr)//[ 5, 10, 15, 'shazan' ]
arr.push(true)
console.log(arr)// [ 5, 10, 15, 'shazan', true ]
arr[10] = "100"
console.log(arr) //[ 5, 10, 15, 'shazan', true, <5 empty items>, '100' ]
arr.push("pop")
console.log(arr)//[ 5, 10, 15, 'shazan', true, <5 empty items>, '100', 'pop' ]
arr.pop()
console.log(arr) // [ 5, 10, 15, 'shazan', true, <5 empty items>, '100' ] //! pop mean remove from last index




let array = new Array(5)
console.log(array)// [ <5 empty items> ]
array[100] = 100
console.log(array);//[ <100 empty items>, 100 ]
array.push(101)
console.log(array) //[ <100 empty items>, 100, 101 ]