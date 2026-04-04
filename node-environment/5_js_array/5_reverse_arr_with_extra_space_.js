let arr = [5, 13, 53, 23, 98, 42, 76, 47, 87];
let newArr = [];
for (let i = arr.length - 1; i >= 0; i--) {
  newArr.push(arr[i]);
}
console.log(newArr); // [ 87, 47, 76, 42, 98, 23, 53, 13,  5]

let tempArr = new Array(arr.length);

let j = 0;
for (let i = arr.length - 1; i >= 0; i--) {
  tempArr[j] = arr[i]
  j++
}
console.log(tempArr) // [ 87, 47, 76, 42, 98, 23, 53, 13,  5]