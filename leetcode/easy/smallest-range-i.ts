// https://leetcode.com/problems/smallest-range-i/

// MINE
/*
function smallestRangeI(nums: number[], k: number): number {
    let min = Math.min(...nums)
    let max = Math.max(...nums)
    console.log({min, max})
    
    min = min + k
    max = max - k
    console.log({min, max})
    
    return max - min >= 0 ? max - min : 0
};
*/

// ANSWER
function smallestRangeI(A: number[], K: number): number {
  return Math.max(0, Math.max(...A) - Math.min(...A) - 2 * K)
}
