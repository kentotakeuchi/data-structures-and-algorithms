// https://leetcode.com/problems/find-target-indices-after-sorting-array/

// MINE
/*
function targetIndices(nums: number[], target: number): number[] {
    const ans = []
    nums.sort((a, z) => a - z)
    for(let i=0; i<nums.length; ++i) if(nums[i] === target) ans.push(i)
    return ans
};
*/

// ANSWER: without sort
function targetIndices(nums: number[], target: number): number[] {
  let count = 0,
    less = 0
  const ans = []
  for (let n of nums) {
    if (n === target) ++count
    if (n < target) ++less
  }
  for (let i = 0; i < count; ++i) ans.push(less++)
  return ans
}
