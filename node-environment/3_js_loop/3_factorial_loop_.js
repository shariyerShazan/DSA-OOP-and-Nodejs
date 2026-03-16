const factorial = (num) => {
  if (typeof num !== "number") {
    throw console.error("Need number!");
  }
  if (num <= 0) {
    throw console.error("Need Positive number!");
  }
  let fact = 1;
  for (let i = 1; i <= num; i++) {
    fact *= i;
  }
  console.log(fact);
};
factorial(5);

const recursionFact = (num) => {
  if (num === 0 || num === 1) {
    return 1;
  }

  if (typeof num !== "number") {
    throw console.error("Need number!");
  }
  if (num <= 0) {
    throw console.error("Need Positive number!");
  }
//   const fact = 

  return num * recursionFact(num - 1);
};
console.log(recursionFact(5));
