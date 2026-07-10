const sumTwo = (a, b) => {
  return a + b;
};

const isEven = (num) => {
  return num % 2 === 0;
};

const maxOfThree = (a, b, c) => {
  let max = a;
  if (max < b) {
    max = b;
  }
  if (max < c) {
    max = c;
  }
  return max;
};
