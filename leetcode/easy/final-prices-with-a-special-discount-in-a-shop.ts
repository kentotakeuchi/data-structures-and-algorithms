// https://leetcode.com/problems/final-prices-with-a-special-discount-in-a-shop/

// MINE: brute force
/*
function finalPrices(prices: number[]): number[] {
    for(let i=0; i<prices.length; ++i) {
        for(let j=i+1; j<prices.length; ++j) {
            if(prices[j] <= prices[i]) {
                prices[i] -= prices[j]
                break
            }
        }
    }
    
    return prices
};
*/

// ANSWER: one pass, stack
// todo: not work -> debug later
function finalPrices(prices: number[]): number[] {
  const stack = []

  for (let i = 0; i < prices.length; ++i) {
    while (stack.length && prices[stack.length - 1] >= prices[i]) prices[stack.pop()] -= prices[i]
    stack.push(i)
  }

  return prices
}
