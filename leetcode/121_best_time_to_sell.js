/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let min = prices[0];
  let profit = 0;
  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < min) {
      min = prices[i];
    }
    let diff = prices[i] - min;
    profit = Math.max(profit, diff);
  }
  return profit;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
