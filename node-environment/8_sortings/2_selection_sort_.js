let arr = [23, 54, 24, 56, 86, 38, 10, 47, 82, 54];

let len = arr.length;

for (let i = 0; i < len - 1; i++) {
  let minIndex = i;

  for (let j = i + 1; j < len; j++) {
    if (arr[j] < arr[minIndex]) {
      minIndex = j;
    }
  }

  let temp = arr[i];
  arr[i] = arr[minIndex];
  arr[minIndex] = temp;
}

console.log(arr);
