let arr = [5, 13, 53, 23, 98, 42, 76, 47, 87];

let i = 0 , j = arr.length-1
while (i != j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
  i++ 
  j--
}

console.log(arr); // [ 87, 47, 76, 42, 98, 23, 53, 13,  5]
