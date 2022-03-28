// https://leetcode.com/problems/maximum-product-difference-between-two-pairs/

// MINE: sort
/*
function maxProductDifference(nums: number[]): number {
    nums.sort((a, z) => a - z)
    return (nums[nums.length-1] * nums[nums.length-2]) - (nums[0] * nums[1])
};
*/

// ANSWER: without sort
function maxProductDifference(nums: number[]): number {
  let max1 = 0,
    max2 = 0,
    min1 = 10000,
    min2 = 10000

  for (let i = 0; i < nums.length; ++i) {
    if (nums[i] > max1) {
      max2 = max1
      max1 = nums[i]
    } else if (nums[i] > max2) max2 = nums[i]

    if (nums[i] < min1) {
      min2 = min1
      min1 = nums[i]
    } else if (nums[i] < min2) min2 = nums[i]
  }

  return max1 * max2 - min1 * min2
}
