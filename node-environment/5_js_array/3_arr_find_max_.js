let arr = [5, 13, 53, 23, 98, 42, 76, 47, 87];
let max = arr[0]
for (let i = 1; i < arr.length; i++) {
  if(max< arr[i]){
    max = arr[i]
  }
}
console.log(max) // 98

let min = arr[0]
for (let i = 1; i < arr.length; i++) {
  if(min > arr[i]){
    min = arr[i]
  }
}
console.log(min) // 5
