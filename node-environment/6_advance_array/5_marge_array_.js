let arr1 = [1, 3, 5, 7, 9];
let arr2 = [2, 4, 6, 8, 10 , 11, 12];
let tempArr = new Array(arr1.length + arr2.length);

let i = 0,
  j = 0,
  k = 0;

// while (i + j !== tempArr.length) {
//   if (arr1[i] < arr2[j]) {
//     tempArr[k] = arr1[i];
//     i++;
//     k++;
//   } else {
//     tempArr[k] = arr2[j];
//     j++;
//     k++;
//   }
// }

while (i + j !== tempArr.length) {
  if (arr1[i] < arr2[j]) {
    tempArr[k++] = arr1[i++];
  } else {
    tempArr[k++] = arr2[j++];
  }
}
console.log(tempArr); // [1, 2, 3, 4,  5,6, 7, 8, 9, 10]
