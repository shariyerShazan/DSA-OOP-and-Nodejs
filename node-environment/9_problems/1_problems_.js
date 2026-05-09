/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  let k = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[k] = nums[i];
      k++;
    }
  }

  return k;
};

console.log(removeElement([3, 2, 2, 3], 3));

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] >= target) {
      return i;
    }
    return nums.length;
  }
};
console.log(searchInsert([1, 3, 5, 6], 5));

var merge = function (nums1, m, nums2, n) {
  let arr = new Array();
  let i = 0,
    j = 0;
  while (i < m && j < n) {
    if (nums1[i] < nums2[j]) {
      arr.push(nums1[i]);
      i++;
    } else {
      arr.push(nums2[j]);
      j++;
    }
  }
  while (i < m) {
    arr.push(nums1[i]);
    i++;
  }
  while (j < n) {
    arr.push(nums2[j]);
    j++;
  }
  return arr;
};
console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3));

var longestCommonPrefix = function (strs) {
  let prefix = "";
  for (let i = 0; i < strs[0].length; i++) {
    let char = strs[0][i];
    for (let j = 1; j < strs.length; j++) {
      if (char !== strs[j][i]) {
        return prefix;
      }
    }
    prefix += char;
  }
  return prefix;
};

console.log(longestCommonPrefix(["flower", "flow", "flight"]));

/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function (n) {
  let count = 0;
  for (let i = 2; i < n; i++) {
    let isPrime = true;
    for (let j = 2; j <= Math.sqrt(i); j++) {
      if (i % j === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      count++;
    }
  }
  return count;
};

console.log(countPrimes(10));
