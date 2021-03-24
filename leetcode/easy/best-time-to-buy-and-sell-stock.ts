// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/

// MINE: brute force.. --> time limit exceeded
/*
function maxProfit(prices: number[]): number {
    // maximum profit
    let max = 0
    
    for(let i=0; i<prices.length-1; i++) {
        for(let j=i+1; j<prices.length; j++) {
            const profit = prices[j]-prices[i]
            if(max < profit) max = profit
        }
    }
    
    // if no profit, return 0
    return max
};
*/

// ANSWER: one pass (i should've come up with this at least..)
function maxProfit(prices: number[]): number {
  let min = Infinity
  let max = 0

  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < min) {
      min = prices[i]
    } else if (max < prices[i] - min) {
      max = prices[i] - min
    }
  }

  return max
}
