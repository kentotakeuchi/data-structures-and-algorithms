// https://leetcode.com/problems/maximum-difference-between-increasing-elements/

// MINE
/*
function maximumDifference(nums: number[]): number {
    let ans = -1
    for(let i=0; i<nums.length-1; ++i) {
        for(let j=i+1; j<nums.length; ++j) {
            const diff = nums[j] - nums[i]
            if(diff >= 0 && diff > ans) ans = diff
        }
    }
    return ans === 0 ? -1 : ans
};
*/

// ANSWER: O(n)
function maximumDifference(nums: number[]): number {
  let min = nums[0],
    ans = -1
  for (let i = 1; i < nums.length; ++i) {
    ans = Math.max(ans, nums[i] - min)
    min = Math.min(min, nums[i])
  }
  return ans === 0 ? -1 : ans
}
