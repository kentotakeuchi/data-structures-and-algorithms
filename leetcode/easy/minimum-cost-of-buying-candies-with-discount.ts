// https://leetcode.com/problems/minimum-cost-of-buying-candies-with-discount/

// MINE..
/*
function minimumCost(cost: number[]): number {
    if(cost.length === 1) return cost[0]
    if(cost.length === 2) return cost[0] + cost[1]
    let ans = 0
    cost.sort((a, z) => z - a)
    for(let i=0; i<cost.length-2; i+=3) {
        ans += cost[i] + cost[i+1]
    }
    return ans
};
*/

// ANSWER
function minimumCost(cost: number[]): number {
  cost.sort((a, z) => z - a)
  let ans = 0
  for (let i = 1; i <= cost.length; ++i) if (i % 3 !== 0) ans += cost[i - 1]
  return ans
}
