// https://leetcode.com/problems/find-pivot-index/

// MINE: iterative
/*
function pivotIndex(nums: number[]): number {
    const sum = nums.reduce((acc, cur) => acc + cur, 0)
    
    for(let i=0; i<nums.length; ++i) {
        let lSum = 0
        if(i !== 0) lSum = nums.slice(0, i).reduce((acc, cur) => acc + cur, 0)
        
        if(lSum === sum - (lSum+nums[i])) return i
    }
    
    return -1
};
*/

// ANSWER
function pivotIndex(nums: number[]): number {
  let sum = 0
  let leftSum = 0

  for (let n of nums) sum += n

  for (let i = 0; i < nums.length; ++i) {
    if (leftSum === sum - leftSum - nums[i]) return i
    leftSum += nums[i]
  }

  return -1
}
