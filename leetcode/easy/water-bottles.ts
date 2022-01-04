// https://leetcode.com/problems/water-bottles/

// MINE
/*
function numWaterBottles(numBottles: number, numExchange: number): number {
    let ans = numBottles
    let remainder = 0
    
    while(numBottles >= numExchange) {
        remainder = numBottles % numExchange
        numBottles = Math.floor(numBottles / numExchange)
        ans += numBottles
        numBottles += remainder
    }
    
    return ans
};
*/

// ANSWER
function numWaterBottles(numBottles: number, numExchange: number): number {
  return numBottles + Math.floor((numBottles - 1) / (numExchange - 1))
}
