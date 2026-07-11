/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  let set = new Set();
  let isDuplicate = false;
  for (let i = 0; i < nums.length; i++) {
    if (set.has(nums[i])) {
      isDuplicate = true;
      break;
    }
    set.add(nums[i]);
  }
  return isDuplicate;
};
console.log(containsDuplicate([1, 2, 3, 4, 1]));


// /**
//  * @param {number[]} nums
//  * @return {boolean}
//  */
// var containsDuplicate = function (nums) {
//     let duplicate = false
//     for(let i = 0 ; i < nums.length ; i++){
//         for(let j = i + 1 ; j < nums.length ; j++){
//             if(nums[i] === nums[j]){
//                 duplicate = true
//                 break
//             }
//         } 
//     }
//     return duplicate
// };
// console.log(containsDuplicate([1, 2, 3, 4, 1]));
