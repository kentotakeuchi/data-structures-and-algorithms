// https://leetcode.com/problems/minimum-difference-between-highest-and-lowest-of-k-scores/

// MINE
function minimumDifference(nums: number[], k: number): number {
  if (nums.length <= 1) return 0

  nums.sort((a, z) => a - z)
  let diff = nums[k - 1] - nums[0]

  for (let i = k; i < nums.length; ++i) diff = Math.min(diff, nums[i] - nums[i - k + 1])

  return diff
}

// ANSWER
