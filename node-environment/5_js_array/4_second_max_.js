let arr = [5, 5, 5, 13, 13, 53, 23, 98, 42, 76, 47, 87, 87, 98, 98, 98];
let max = Math.max(arr[0], arr[1]);
let secMax = Math.min(arr[0], arr[1]);

for (let i = 2; i < arr.length; i++) {
  if (arr[i] > max) {
    secMax = max;
    max = arr[i];
  } else if (arr[i] > secMax && max !== arr[i]) {
    secMax = arr[i];
  }
}

console.log(secMax); // 87

let min = max;
let secMin = max;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] < min) {
    secMin = min;
    min = arr[i];
  } else if (arr[i] > min && arr[i] < secMin) {
    secMin = arr[i];
  }
}

console.log(secMin); // 13
