// https://leetcode.com/problems/longest-continuous-increasing-subsequence/

// MINE
/*
function findLengthOfLCIS(nums: number[]): number {
    let max = 1
    let len = 1
    
    for(let i=1; i<nums.length; ++i) {        
        if(nums[i-1] < nums[i]) {
            ++len
            max = Math.max(max, len)
        } else {
            len = 1
        }
    }
    
    return max
};
*/

// ANSWER: sliding window
function findLengthOfLCIS(nums: number[]): number {
  if (nums.length < 2) return nums.length
  let left = 0,
    right = 1,
    maxLen = 0

  while (right < nums.length) {
    if (nums[right - 1] >= nums[right]) left = right
    right++
    maxLen = Math.max(right - left, maxLen)
  }
  return maxLen
}
