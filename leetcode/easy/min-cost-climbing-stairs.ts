// https://leetcode.com/problems/min-cost-climbing-stairs/

// MINE
/*
function minCostClimbingStairs(cost: number[]): number {
    let min = Math.min(cost[0], cost[1])
    let i = 0
    if(min === cost[1]) i = 1
    else i = 0
    
    let sum = 0
    
    while(i < cost.length-2) {
        console.log({i, min, sum})
        min = Math.min(cost[i+1], cost[i+2])
        sum += min
        if(min === cost[i+2]) i = i+2
        else i = i+1
    }
    
    return sum
};
*/

// ANSWER: bottom up approach
function minCostClimbingStairs(cost: number[]): number {
  for (let i = cost.length - 3; i >= 0; i--) cost[i] += Math.min(cost[i + 1], cost[i + 2])
  return Math.min(cost[0], cost[1])
}
