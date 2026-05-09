const factorial = (num) => {
  if (num === 0 || num === 1) return 1;
  return num * factorial(num - 1);
};
console.log(factorial(5)); // 120

const sum = (from, to) => {
  if (from > to) return 0;
  return from + sum(from + 1, to);
};
console.log(sum(5, 10)); // 5 + 6 + 7 + 8 + 9 + 10 = 45

const recursion = (num) => {
  if (num === 0) return;
  console.log(`Num is decressing. and now num= ${num}`);
  return recursion(num - 1);
};
console.log(recursion(5));

const twoSum = (numsArr, target) => {
  if (numsArr.length === 0) return false;

  for (let i = 0; i < numsArr.length; i++) {
    for (let j = i + 1; j < numsArr.length; j++) {
      if (numsArr[i] + numsArr[j] === target) return [numsArr[i], numsArr[j]];
    }
  }
};
console.log(twoSum([1, 2, 3, 4, 5], 5));

const predecrementRecursion = (num) => {
  if (num === 0) return;
  console.log("Pre decrement!", num);
  predecrementRecursion(--num);
};
predecrementRecursion(5);

const portDecrementRecursion = (num) => {
  if (num === 0) return;
  console.log("Post decrement", num);
  return portDecrementRecursion(num--);
};
// portDecrementRecursion(5) // Post decrement will cause infinite loop because num-- will return the current value of num before decrementing it, so the base case will never be reached.

const PrintAterRecursion = (num) => {
  if (num === 0) {
    return;
  }
  console.log("Before", num);
  PrintAterRecursion(--num);
  console.log(`It's run reversely!`, num);
};
PrintAterRecursion(5);

const sumOfDigits = (num) => {
  let sum = 0;
  while (num !== 0) {
    let rem = num % 10;
    sum = sum + rem;
    num = Math.floor(num / 10);
  }
  return sum;
};
console.log(sumOfDigits(345));

const factorialOfDIgitOfSum = (num) => {
  let sum = 0;
  let arr = [];
  while (num !== 0) {
    let rem = num % 10;
    arr.push(rem);
    num = Math.floor(num / 10);
  }
  const factorial = (num) => {
    if (num === 0 || num === 1) {
      return 1;
    }
    return num * factorial(--num);
  };
  for (let i = 0; i < arr.length; i++) {
    sum += factorial(arr[i]);
  }
  return sum;
};
console.log(factorialOfDIgitOfSum(345));

const reverseNumber = (num) => {
  let rev = 0;
  while (num !== 0) {
    let rem = num % 10;
    rev = rem + rev * 10;
    num = Math.floor(num / 10);
  }
  return rev;
};
console.log(reverseNumber(345));

const countDigit = (num) => {
  let count = 0;
  while (num !== 0) {
    num = Math.floor(num / 10);
    count++;
  }
  return count;
};
console.log(countDigit(21343));

const largestDigitOfNumber = (num) => {
  let arr = [];
  while (num !== 0) {
    let rem = num % 10;
    arr.push(rem);
    num = Math.floor(num / 10);
  }
  return Math.max(...arr);
};
console.log(largestDigitOfNumber(352589));

const smallestDigitOfNumber = (num) => {
  let arr = [];
  while (num !== 0) {
    let rem = num % 10;
    arr.push(rem);
    num = Math.floor(num / 10);
  }
  return Math.min(...arr);
};
console.log(smallestDigitOfNumber(1284954303));

const largDigitOfArr = (numArr) => {
  let large = numArr[0];
  for (let i = 0; i < numArr.length; i++) {
    if (large < numArr[i]) {
      large = numArr[i];
    }
  }
  return large;
};
console.log(largDigitOfArr([43, 45, 12, 75, 99, 67]));

const sumOfSqrDigit = (num) => {
  let sum = 0;
  while (num !== 0) {
    let rem = num % 10;
    sum += rem ** 2;
    num = Math.floor(num / 10);
  }
  return sum;
};
console.log(sumOfSqrDigit(123));

const sqr = (num) => {
  return num * num;
};
console.log(sqr(5));

const sumOfQubDigit = (num) => {
  let sum = 0;
  while (num != 0) {
    let rem = num % 10;
    sum += rem ** 3;
    num = Math.floor(num / 10);
  }
  return sum;
};
console.log(sumOfQubDigit(123));

const checkArmstrongNumber = (num) => {
  let org = num;
  let isArmstrong = false;
  let sum = 0;
  while (num !== 0) {
    let rem = num % 10;
    sum += rem ** 3;
    num = Math.floor(num / 10);
  }
  if (sum === org) {
    isArmstrong = true;
  }
  return isArmstrong;
};
console.log(checkArmstrongNumber(153));

const strongNumber = (num) => {
  let org = num;
  let isStrong = false;
  let sum = 0;
  var factorial = (num) => {
    if (num === 1 || num === 0) {
      return 1;
    }
    return num * factorial(--num);
  };
  while (num !== 0) {
    let rem = num % 10;
    sum = sum + factorial(rem);
    num = Math.floor(num / 10);
  }
  if (org === sum) {
    isStrong = true;
  }
  return isStrong;
};
console.log(strongNumber(145));

const isPalindromeNumber = (num) => {
  let isPalindrome = false;
  let org = num;
  let rev = 0;
  while (num !== 0) {
    let rem = num % 10;
    rev = rem + rev * 10;
    num = Math.floor(num / 10);
  }
  if (org === rev) {
    isPalindrome = true;
  }
  return isPalindrome;
};
console.log(isPalindromeNumber(121));

const harshadNumber = (num) => {
  let org = num;
  let isHashd = false;
  let sumOfDigit = 0;
  while (num !== 0) {
    let rem = num % 10;
    sumOfDigit += rem;
    num = Math.floor(num / 10);
  }
  if (org % sumOfDigit === 0) {
    isHashd = true;
  }
  return isHashd;
};
console.log(harshadNumber(18));

const repetedDigitSum = (num) => {
  if (num === 0) return 0;
  return 1 + ((num - 1) % 9);
};
console.log(repetedDigitSum(9875));

const repeatedDigitSum = (num) => {
  while (num >= 10) {
    let sum = 0;
    while (num > 0) {
      sum += num % 10;
      num = Math.floor(num / 10);
    }
    num = sum;
  }
  return num;
};
console.log(repeatedDigitSum(9875));

const spyNumber = (num) => {
  let sum = 0;
  let mul = 1;
  let isSpy = false;
  while (num !== 0) {
    let rem = num % 10;
    sum += rem;
    mul *= rem;
    num = Math.floor(num / 10);
  }
  if (sum === mul) {
    isSpy = true;
  }
  return isSpy;
};
console.log(spyNumber(123));

const neonNumber = (num) => {
  let isNeon = false;
  let sumOfSqrDigit = 0;
  let sqrOfNumber = num ** 2;
  let temp = sqrOfNumber;
  while (temp !== 0) {
    let rem = temp % 10;
    sumOfSqrDigit += rem;
    temp = Math.floor(temp / 10);
  }
  if (num === sumOfSqrDigit) {
    isNeon = true;
  }
  return isNeon;
};
console.log(neonNumber(9));

const automorphicNumber = (num) => {
  let isAutomorphic = false;
  let sqrNum = num ** 2;
  let lastDigit = num % 10;
  let lastdigitOfsqr = sqrNum % 10;

  if (lastdigitOfsqr === lastDigit) {
    isAutomorphic = true;
  }
  return isAutomorphic;
};
console.log(automorphicNumber(25), "-");

const happyNumber = (num) => {
  let isHappy = false;
  let mainSum = 0;
  while (num !== 1) {
    let sum = 0;
    while (num !== 0) {
      let rem = num % 10;
      sum += rem ** 2;
      num = Math.floor(num / 10);
    }
    num = sum;
    mainSum = num;
  }
  if (mainSum === 1) {
    isHappy = true;
  }
  return isHappy;
};
console.log(happyNumber(19), "--");

const FibonacciNumber = (num) => {
  let first = 0,
    second = 1;
  let result = [first, second];
  for (let i = 0; i < num.length; i++) {
    let third = first + second;
    first = second;
    second = third;
    result.push(third);
  }
  return result;
};
console.log(FibonacciNumber(10));

const fiboNTerms = (num, first, second, sequence = []) => {
  if (num === 0) return sequence;
  sequence.push(first);
  return fiboNTerms(num - 1, second, first + second, sequence);
};
console.log(fiboNTerms(10, 0, 1));

const HighestCommonFactor = (a, b) => {
  let min = Math.min(a, b);
  for (let i = min / 2; i >= 1; i--) {
    if (a % i === 0 && b % i === 0) {
      return i;
    }
  }
};
console.log(HighestCommonFactor(20, 32));

const LeastCommonMultiple = (a, b) => {
  if (a === 0 || b === 0) return 0;
  return Math.abs(a * b) / HighestCommonFactor(a, b);
};
console.log(LeastCommonMultiple(20, 32)); // 160

const HCF = (a, b) => {
  while (a !== b) {
    if (a > b) {
      a = a - b;
    } else b = b - a;
  }
  return a;
};

console.log(HCF(20, 32));

// const data = {
//     name: "shazan",
//     age: 22 ,
//     profession: "Software Engineer!"
// }
// console.log(JSON.stringify(data));
// console.log(data)

let array = [2, 3, 4, 9, 12, 22, 32, 34, 54, 56, 67, 76, 79, 98, 124];

const binarySearch = (arr, first, last, target) => {
  while (first <= last) {
    let mid = Math.floor((first + last) / 2);
    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] > target) {
      last = mid - 1;
    } else {
      first = mid + 1;
    }
  }
  return -1;
};
const index = binarySearch(array, 0, array.length - 1, 4);
console.log("Index: ", index === -1 ? "Not Found" : index); // index 2

const merge = (left, right) => {
  let result = [];
  let i = 0;
  let j = 0;

  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      result.push(left[i]);
      i++;
    } else {
      result.push(right[j]);
      j++;
    }
  }

  return [...result, ...left.slice(i), ...right.slice(j)];
};

const mergeSort = (arr) => {
  if (arr.length <= 1) return arr;

  const mid = Math.floor(arr.length / 2);

  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));

  return merge(left, right);
};

console.log(mergeSort([5, 2, 8, 1, 3]));

const quickSort = (arr) => {
  if (arr.length <= 1) return arr;

  const pivot = arr[arr.length - 1];

  const left = [];
  const right = [];

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  return [...quickSort(left), pivot, ...quickSort(right)];
};

console.log(quickSort([5, 2, 8, 1, 3]));

const cyclicSort = (arr) => {
  let i = 0;

  while (i < arr.length) {
    const correctIndex = arr[i] - 1;

    if (arr[i] !== arr[correctIndex]) {
      [arr[i], arr[correctIndex]] = [arr[correctIndex], arr[i]];
    } else {
      i++;
    }
  }

  return arr;
};

console.log(cyclicSort([3, 5, 2, 1, 4]));

const searchInsert = (nums, target) => {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (nums[mid] === target) {
      return mid;
    }

    if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return left;
};

console.log(searchInsert([1, 3, 5, 6], 5));
console.log(searchInsert([1, 3, 5, 6], 2));
console.log(searchInsert([1, 3, 5, 6], 7));
