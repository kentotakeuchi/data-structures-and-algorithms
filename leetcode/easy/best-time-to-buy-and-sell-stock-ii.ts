// https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/

// MINE..
/*
function maxProfit(prices: number[]): number {
    // base case
    if(prices.length === 1) return 0
    
    let max = 0
    
    for(let i=0; i<prices.length-1; ++i) {
        // to store sum of profit each loop
        let sum = 0
        // initalize min
        let min = prices[i]
        
        for(let j=i+1; j<prices.length; ++j) {
            // check if min or not
            if(prices[j] < min) {
                min = prices[j]
            }

            // if current price - min is greater than min --> 

            // 
        }
    }
        
    return max
};
*/

// ANSWER: brute force (time limit exceede)
/*
function maxProfit(prices: number[]): number {
    return calculate(prices, 0)
    
    function calculate(prices: number[], s: number): number {
        if(prices.length <= s) return 0
        
        let max = 0
        
        for(let start=s; start<prices.length; ++start) {
            let maxProfit = 0
            
            for(let i=start+1; i<prices.length; ++i) {
                let profit
                
                if(prices[start] < prices[i]) {
                    profit = calculate(prices, i+1) + prices[i] - prices[start]
                }
                
                if(maxProfit < profit) {
                    maxProfit = profit
                }
            }
            
            if(max < maxProfit) max = maxProfit
        }
        
        return max
    }
}
*/

// ANSWER: peak valley approach
/*
function maxProfit(prices: number[]): number {
    const len = prices.length
    let i = 0
    let valley = prices[0]
    let peak = prices[0]
    let maxProfit = 0
    
    while(i < len-1) {
        // find valley and set point there
        while(i < len-1 && prices[i+1] <= prices[i]) {
            ++i
        }
        valley = prices[i]
        
        // find peak and set point there
        while(i < len-1 && prices[i] <= prices[i+1]) {
            ++i
        }
        peak = prices[i]
        
        maxProfit += peak - valley
    }
    
    return maxProfit
}
*/

// ANSWER: simple one pass
function maxProfit(prices: number[]): number {
  let maxProfit = 0

  for (let i = 1; i < prices.length; ++i) {
    if (prices[i - 1] < prices[i]) {
      maxProfit += prices[i] - prices[i - 1]
    }
  }

  return maxProfit
}
