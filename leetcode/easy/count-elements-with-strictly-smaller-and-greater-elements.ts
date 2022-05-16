// https://leetcode.com/problems/count-elements-with-strictly-smaller-and-greater-elements/

// MINE
/*
function countElements(nums: number[]): number {
    const max = Math.max(...nums), min = Math.min(...nums)
    let ans = 0
    for(let n of nums) if(n < max && n > min) ++ans
    return ans
};
*/

// ANSWER
function countElements(nums: number[]): number {
  if (nums.length < 2) return 0
  let min = nums[0],
    max = nums[0],
    numMin = 1,
    numMax = 1
  for (let i = 1; i < nums.length; ++i) {
    if (nums[i] < min) {
      min = nums[i]
      numMin = 1
    } else if (nums[i] === min) ++numMin
    if (nums[i] > max) {
      max = nums[i]
      numMax = 1
    } else if (nums[i] === max) ++numMax
  }
  return min === max ? 0 : nums.length - numMin - numMax
}
