const sumOfNumDigist = (num) => {
  let sum = 0;
  while (num > 0) {
    let rem = num % 10;
    sum = sum + rem;
    num = Math.floor(num / 10);
  }
  console.log(sum);
};
sumOfNumDigist(12345);

const numReverse = (num) => {
  let rev = 0;
  let rem;
  while (num > 0) {
    rem = num % 10;
    num = Math.floor(num / 10);
    rev = rev * 10 + rem;
  }
  return rev;
};
console.log(numReverse(123));

const numReverseArr = (num) => {
  const rev = [];

  while (num > 0) {
    rev.push(num % 10);
    num = Math.floor(num / 10);
  }

  return Number(rev.join(""));
};

console.log(numReverseArr(123));
