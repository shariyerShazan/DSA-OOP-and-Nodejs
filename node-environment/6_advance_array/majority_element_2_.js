/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function (nums) {
  let countOne = 0,
    countTwo = 0;
  let elementOne = null,
    elementTwo = null;

  for (let num of nums) {
    if (num === elementOne) {
      countOne++;
    } else if (num === elementTwo) {
      countTwo++;
    } else if (countOne === 0) {
      elementOne = num;
      countOne++;
    } else if (countTwo === 0) {
      elementTwo = num;
      countTwo++;
    } else {
      countOne--;
      countTwo--;
    }
  }
  countOne = 0;
  countTwo = 0;
  let result = [];
  for (let num of nums) {
    if (num === elementOne) countOne++;
    if (num === elementTwo) countTwo++;
  }
  if (countOne > Math.floor(nums.length / 3)) {
    result.push(elementOne);
  }
  if (countTwo > Math.floor(nums.length / 3)) {
    result.push(elementTwo);
  }
  return result;
};
