const strongNum = (num) => {
  const original = num;
  let sum = 0;
  while (num > 0) {
    let rem = num % 10;
    let fact = 1;
    for (let i = 1; i <= rem; i++) {
      fact *= i;
    }
    sum += fact;
    num = Math.floor(num / 10);
  }
  if (sum === original) {
    return true;
  }
  return false;
};
console.log(strongNum(145)); // true

