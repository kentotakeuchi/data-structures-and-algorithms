// https://leetcode.com/problems/running-sum-of-1d-array/

// MINE: naive
/*
function runningSum(nums: number[]): number[] {
    const ans = [nums[0]]
    let sum = nums[0]
    
    for(let i=1; i<nums.length; ++i) {
        sum += nums[i]
        ans.push(sum)
    }
    
    return ans
};
*/

// ANSWER: in-place
function runningSum(nums: number[]): number[] {
  for (let i = 1; i < nums.length; ++i) nums[i] += nums[i - 1]

  return nums
}
