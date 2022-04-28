// https://leetcode.com/problems/smallest-index-with-equal-value/

// MINE
/*
function smallestEqual(nums: number[]): number {
    for(let i=0; i<nums.length; ++i) {
        if(nums[i] === i%10) return i
    }
    return -1
};
*/

// ANSWER: without modulo
function smallestEqual(nums: number[]): number {
  for (let i = 0; i < nums.length; ++i) {
    if (nums[i] >= 10) continue
    if (nums[i] === i % 10) return i
  }
  return -1
}
