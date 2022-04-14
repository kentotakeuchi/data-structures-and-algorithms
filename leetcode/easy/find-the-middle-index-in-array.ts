// https://leetcode.com/problems/find-the-middle-index-in-array/

// MINE
/*
function findMiddleIndex(nums: number[]): number {
    for(let i=0; i<nums.length; ++i) {
        const lSum = i === 0 ? 0 : nums.slice(0, i).reduce((acc, cur) => acc + cur, 0)
        const rSum = i === nums.length-1 ? 0 : nums.slice(i+1).reduce((acc, cur) => acc + cur, 0)
        if(lSum === rSum) return i
    }
    return -1
};
*/

// ANSWER
function findMiddleIndex(nums: number[]): number {
  let totalSum = 0,
    leftSum = 0
  for (let n of nums) totalSum += n
  for (let i = 0; i < nums.length; leftSum += nums[i++]) {
    if (leftSum * 2 === totalSum - nums[i]) return i
  }
  return -1
}
