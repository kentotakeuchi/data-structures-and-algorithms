// https://leetcode.com/problems/special-array-with-x-elements-greater-than-or-equal-x/

// MINE..
/*
function specialArray(nums: number[]): number {
    let count = 0
    let x = 0
    
    for(let i=0; i<nums.length; ++i) {
        
    }
};
*/

// ANSWER: sort
/*
function specialArray(nums: number[]): number {
    if(nums.length === 0) return 0
    
    nums.sort((a, z) => a - z)
    
    for(let x=1; x<=nums.length; ++x) {
        const candidate = nums.length - x
        
        if(nums[candidate] >= x && (candidate === 0 || nums[candidate-1] < x)) return x
    }
    
    return -1
}
*/

// ANSWER: sort
function specialArray(nums: number[]): number {
  nums.sort((a, b) => b - a)
  nums.push(-1)
  for (let i = 0, prev = 0; i <= nums.length; ++i) {
    if (nums[i] === nums[prev]) continue
    if (i <= nums[prev] && i > nums[i]) return i
    prev = i
  }
  return -1
}
