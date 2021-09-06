// https://leetcode.com/problems/monotonic-array/

// MINE..
/*
function isMonotonic(nums: number[]): boolean {
    let l = 0
    let r = nums.length-1
    const isInc = nums[l] <= nums[r]
    
    if(isInc) {
        
    }
    
    return true
};
*/

// ANSWER: one pass
/*
function isMonotonic(nums: number[]): boolean {
    let inc = true
    let dec = true
    for(let i=0; i<nums.length-1; ++i) {
        if(nums[i] > nums[i+1]) inc = false
        if(nums[i] < nums[i+1]) dec = false
    }
    return inc || dec
}
*/

// ANSWER: every func
function isMonotonic(A: number[]): boolean {
  return A.every((v, i) => i === 0 || v <= A[i - 1]) || A.every((v, i) => i === 0 || v >= A[i - 1])
}
