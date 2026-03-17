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

console.log(isPrime(7) ? "Is prime" : "Not prime"); // Is prime
console.log(isPrime(8) ? "Is prime" : "Not prime"); // Not prime
