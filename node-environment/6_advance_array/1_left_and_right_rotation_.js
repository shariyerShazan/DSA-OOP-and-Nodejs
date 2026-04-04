let arr = [0, 1, 2, 3, 4, 5];

let copy = arr[0];
for (let i = 0; i < arr.length - 1; i++) {
  arr[i] = arr[i + 1];
}
arr[arr.length - 1] = copy;
console.log(arr); // [ 1, 2, 3, 4, 5, 0 ]

let arr2 = [6, 7, 8, 9, 10, 11];
let cpy = arr2[arr2.length - 1];
for (let i = arr2.length - 2; i >= 0; i--) {
  arr2[i + 1] = arr2[i];
}
arr2[0] = cpy;
console.log(arr2); // [ 11, 6, 7, 8, 9, 10 ]



//! double rotation
let arr3 = [0, 1, 2, 3, 4, 5];
for (let j = 0; j < 2; j++) {
  let copy = arr3[0];
  for (let i = 0; i < arr3.length - 1; i++) {
    arr3[i] = arr3[i + 1];
  }
  arr3[arr3.length - 1] = copy;
}
console.log(arr3) // [ 2, 3, 4, 5, 0, 1 ]