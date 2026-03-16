// function calculateBill(unit) {
//   if (typeof unit !== "number" || unit < 0) {
//     return "Invalid input";
//   }

//   const tiers = [
//     { limit: 100, rate: 5 },
//     { limit: 200, rate: 7 },
//     { limit: 400, rate: 9 },
//     { limit: Infinity, rate: 13 },
//   ];

//   let amount = 0;
//   let prevLimit = 0;

//   for (const tier of tiers) {
//     if (unit > tier.limit) {
//       amount += (tier.limit - prevLimit) * tier.rate;
//       prevLimit = tier.limit;
//     } else {
//       amount += (unit - prevLimit) * tier.rate;
//       break;
//     }
//   }

//   return amount;
// }

// console.log(calculateBill(70));
// console.log(calculateBill(150));
// console.log(calculateBill(270));
// console.log(calculateBill(410));
// console.log(calculateBill(1200));


function calculateBill(unit, tiers) {
  if (typeof unit !== "number" || unit < 0) {
    return "Invalid input";
  }

  let amount = 0;
  let remaining = unit;

  for (const tier of tiers) {
    if (remaining > tier.limit) {
      amount += (remaining - tier.limit) * tier.rate;
      remaining = tier.limit;
    }
  }

  return amount;
}
  const tiers = [
    { limit: 400, rate: 13 },
    { limit: 200, rate: 9 },
    { limit: 100, rate: 7 },
    { limit: 0, rate: 5 },
  ];

console.log(calculateBill(70, tiers));
console.log(calculateBill(150, tiers));
console.log(calculateBill(270, tiers));
console.log(calculateBill(410, tiers));
console.log(calculateBill(1200, tiers));