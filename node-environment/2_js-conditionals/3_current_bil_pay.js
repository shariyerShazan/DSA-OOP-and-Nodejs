const payBill = (unit) => {
  let bill = 0;

  const tier1Threshold = 100;
  const tier2Threshold = 200;
  const tier3Threshold = 400;
  const tier4Threshold = 600;

  const tier1Rate = 5;
  const tier2Rate = 8;
  const tier3Rate = 10;
  const tier4Rate = 12;

  if (typeof unit !== "number" || unit < 0) {
    console.log("Invalid input");
    return;
  }

  if (unit <= tier1Threshold) {
    bill = unit * tier1Rate;
  } 
  
  else if (unit <= tier2Threshold) {
    bill = tier1Threshold * tier1Rate + (unit - tier1Threshold) * tier2Rate;
  } 
  
  else if (unit <= tier3Threshold) {
    bill =
      tier1Threshold * tier1Rate +
      (tier2Threshold - tier1Threshold) * tier2Rate +
      (unit - tier2Threshold) * tier3Rate;
  } 
  
  else if (unit <= tier4Threshold) {
    bill =
      tier1Threshold * tier1Rate +
      (tier2Threshold - tier1Threshold) * tier2Rate +
      (tier3Threshold - tier2Threshold) * tier3Rate +
      (unit - tier3Threshold) * tier4Rate;
  } 
  
  else {
    bill =
      tier1Threshold * tier1Rate +
      (tier2Threshold - tier1Threshold) * tier2Rate +
      (tier3Threshold - tier2Threshold) * tier3Rate +
      (tier4Threshold - tier3Threshold) * tier4Rate +
      (unit - tier4Threshold) * tier4Rate;
  }

  return bill;
};
console.log(payBill(70))  // 350
console.log(payBill(150)); // 900
console.log(payBill(270)); // 2000
console.log(payBill(410)); // 3420
console.log(payBill(650)); // 6300