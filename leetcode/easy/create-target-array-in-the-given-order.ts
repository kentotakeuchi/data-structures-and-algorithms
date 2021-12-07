// https://leetcode.com/problems/create-target-array-in-the-given-order/

// MINE
/*
function createTargetArray(nums: number[], index: number[]): number[] {
    const ans = []
    
    for(let i=0; i<index.length; ++i) {
        if(ans[index[i]] !== undefined) {
            ans.splice(index[i], 0, nums[i])
        } else {
            ans[index[i]] = nums[i]
        } 
    }
    
    return ans.slice(0, index.length)
};
*/

// ANSWER: without splice
function createTargetArray(nums: number[], idxArr: number[]): number[] {
  let target = [],
    max = -1
  for (let i = 0; i < idxArr.length; i++) {
    if (idxArr[i] <= max) {
      for (let j = 0; j < i; j++) {
        if (idxArr[i] <= idxArr[j]) idxArr[j]++
        if (idxArr[j] > max) max = idxArr[j]
      }
    }
    max = Math.max(max, idxArr[i])
  }
  for (const i in nums) target[idxArr[i]] = nums[i]
  return target
}
