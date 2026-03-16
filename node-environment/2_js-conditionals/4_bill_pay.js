function calculateBill(unit) {
  // input validation
  if (typeof unit !== "number" || isNaN(unit)) {
    return "Invalid input: number dite hobe";
  }

  if (unit < 0) {
    return "Invalid input: negative unit possible na";
  }

  let amount = 0;
  let remainingUnit = unit;

  if (remainingUnit > 400) {
    amount += (remainingUnit - 400) * 13;
    remainingUnit = 400;
  }

  if (remainingUnit > 200) {
    amount += (remainingUnit - 200) * 9;
    remainingUnit = 200;
  }

  if (remainingUnit > 100) {
    amount += (remainingUnit - 100) * 7;
    remainingUnit = 100;
  }

  if (remainingUnit <= 100) {
    amount += remainingUnit * 5;
  }

  return amount;
}

console.log(calculateBill(70))   // 350
console.log(calculateBill(150))  // 850
console.log(calculateBill(270))  // 1760
console.log(calculateBill(410))  // 3050
console.log(calculateBill(1200)) // 13350