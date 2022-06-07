// https://leetcode.com/problems/find-closest-number-to-zero/

// MINE
/*
function findClosestNumber(nums: number[]): number {
    let ans = nums[0]
    for(let i=1; i<nums.length; ++i) {
        if(Math.abs(nums[i]) <= Math.abs(ans)) {
            if(Math.abs(nums[i]) === Math.abs(ans)) ans = Math.max(nums[i], ans)
            else ans = nums[i]
        }
    }
    return ans
};
*/

// ANSWER
function findClosestNumber(nums: number[]): number {
  let ans = nums[0]
  for (let i = 1; i < nums.length; ++i) {
    if (Math.abs(nums[i] - 0.1) < Math.abs(ans - 0.1)) ans = nums[i]
  }
  return ans
}
