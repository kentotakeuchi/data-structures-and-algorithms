// https://leetcode.com/problems/remove-element/

// MINE: two pointer
/*
function removeElement(nums: number[], val: number): number {
    if(nums.length === 0) return 0
    let i = 0
    for(let j = 0; j < nums.length; j++) {
        if(nums[j] !== val) {
            nums[i] = nums[j]
            ++i
        }
    }
    
    console.log({nums})
    return i
};
*/

// ANSWER: two pointer - when elements to remove are rare
function removeElement(nums: number[], val: number): number {
  let i = 0
  let n = nums.length
  while (i < n) {
    if (nums[i] == val) {
      nums[i] = nums[n - 1]
      // reduce array size by one
      n--
    } else {
      i++
    }
  }
  return n
}
