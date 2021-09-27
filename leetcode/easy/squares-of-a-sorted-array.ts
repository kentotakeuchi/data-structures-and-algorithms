// https://leetcode.com/problems/squares-of-a-sorted-array/

// MINE..
/*
function sortedSquares(nums: number[]): number[] {

};
*/

// ANSWER: two pointers
function sortedSquares(nums: number[]): number[] {
  const n = nums.length
  const result: number[] = []
  let i = 0
  let j = n - 1

  for (let p = n - 1; p >= 0; --p) {
    if (Math.abs(nums[i]) > Math.abs(nums[j])) {
      result[p] = nums[i] * nums[i]
      ++i
    } else {
      result[p] = nums[j] * nums[j]
      --j
    }
  }

  return result
}
