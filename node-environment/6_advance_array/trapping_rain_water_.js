/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
  let left = new Array(height.length);
  let right = new Array(height.length);
  let leftMax = height[0],
    rightMax = height[height.length - 1];
  left[0] = leftMax;
  right[right.length - 1] = rightMax;
  for (let i = 0; i < height.length; i++) {
    leftMax = Math.max(height[i], leftMax);
    left[i] = leftMax;
  }
  for (let i = height.length - 1; i >= 0; i--) {
    rightMax = Math.max(height[i], rightMax);
    right[i] = rightMax;
  }
  let ans = 0;
  for (let i = 0; i < height.length; i++) {
    ans += Math.min(left[i], right[i]) - height[i];
  }
  return ans;
};
