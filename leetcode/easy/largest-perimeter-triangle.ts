// https://leetcode.com/problems/largest-perimeter-triangle/

// MINE: sort
function largestPerimeter(nums: number[]): number {
  nums.sort((a, z) => z - a)
  for (let i = 2; i < nums.length; ++i) {
    if (nums[i - 2] < nums[i - 1] + nums[i]) {
      return nums[i - 2] + nums[i - 1] + nums[i]
    }
  }

  return 0
}

// ANSWER
