// https://leetcode.com/problems/concatenation-of-array/

// MINE
/*
function getConcatenation(nums: number[]): number[] {
    // cheating
    // return [...nums, ...nums]
    
    // straightforward
    const n = nums.length
    for(let i=0; i<n; ++i) nums.push(nums[i])
    return nums
};
*/

// ANSWER
function getConcatenation(nums: number[]): number[] {
  const ans = new Array(nums.length * 2)
  for (let i = 0; i < nums.length; ++i) ans[i] = ans[nums.length + i] = nums[i]
  return ans
}
