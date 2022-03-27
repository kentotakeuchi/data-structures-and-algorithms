// https://leetcode.com/problems/remove-one-element-to-make-the-array-strictly-increasing/

// MINE
/*
function canBeIncreasing(nums: number[]): boolean {
    for(let i=0; i<nums.length; ++i) {
        const copy = [...nums]
        copy.splice(i, 1)
        
        let isAsc = true
        for(let j=1; j<copy.length; ++j) {
            if(copy[j-1] >= copy[j]) {
                isAsc = false
                break
            }
        }
        if(isAsc) return true
    }
    return false
};
*/

// ANSWER
function canBeIncreasing(nums: number[]): boolean {
  let count = 0
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] <= nums[i - 1]) {
      count++
      if (i > 1 && nums[i] <= nums[i - 2]) nums[i] = nums[i - 1]
    }
  }
  return count <= 1
}
