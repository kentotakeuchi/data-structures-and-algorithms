// https://leetcode.com/problems/make-array-zero-by-subtracting-equal-amounts/

// MINE
function minimumOperations(nums: number[]): number {
  const set = new Set(nums)
  return set.has(0) ? set.size - 1 : set.size
}

// ANSWER
