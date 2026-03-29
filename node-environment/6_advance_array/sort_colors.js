/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
  let sort = nums.sort((a, b) => a - b);
  return sort;
};
