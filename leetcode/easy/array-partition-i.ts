// https://leetcode.com/problems/array-partition-i/

// MINE..
/*
function arrayPairSum(nums: number[]): number {

};
*/

// ANSWER
function arrayPairSum(nums: number[]): number {
  // sort and sum up the minimum of the pairs
  return nums.sort((a, b) => a - b).reduce((sum, cur, i) => (i % 2 === 0 ? (sum += cur) : sum), 0)
}
