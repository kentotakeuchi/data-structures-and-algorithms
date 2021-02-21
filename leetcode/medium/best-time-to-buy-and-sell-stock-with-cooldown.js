// https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-cooldown/

/**
 * @param {number[]} prices
 * @return {number}
 */

// MINE..
var maxProfit = function (prices) {};

// ANSWER
var maxProfit = function (prices) {
  let hold = -Infinity,
    sold = 0,
    rest = 0;
  for (let i = 0; i < prices.length; i++) {
    let nextHold = Math.max(hold, rest - prices[i]);
    let nextSold = hold + prices[i];
    let nextRest = Math.max(rest, sold);
    hold = nextHold;
    sold = nextSold;
    rest = nextRest;
  }
  return Math.max(sold, rest);
};
