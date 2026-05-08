let arr = [23, 54, 24, 56, 86, 38, 10, 47, 82, 54];

var len = arr.length;
for (let i = 0; i < len - 1; i++) {
  for (let j = 0; j < len - 1 - i; j++) {
    if(arr[j] > arr[j+1]){
        let temp = arr[j] 
        arr[j] = arr[j+1] 
        arr[j+1] = temp
    }
  }
}
console.log(arr)