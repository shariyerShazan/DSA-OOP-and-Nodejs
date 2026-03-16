const primeInRange = (start, end) => {
  const isPrime = (num) => {
    if (num <= 1) return false;
    if (num === 2) return true;
    if (num % 2 === 0) return false;

    for (let i = 3; i <= Math.sqrt(num); i += 2) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  };
  let count = 0;

  for (let i = start; i <= end; i++) {
    if (isPrime(i)) {
      count++;
    }
  }
  return count;
};

console.log(primeInRange(1, 10));
