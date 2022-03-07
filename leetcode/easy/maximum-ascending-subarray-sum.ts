// https://leetcode.com/problems/maximum-ascending-subarray-sum/

// MINE
/*
function maxAscendingSum(nums: number[]): number {
    let max = nums[0], sum = nums[0], i = 0, j = 1
    while(j < nums.length) {
        if(nums[i] >= nums[j]) {
            i = j
            j = i+1
            sum = nums[i]
        } else {
            sum += nums[j]
            max = Math.max(max, sum)
            ++i
            ++j
        }
    }
    return max
};
*/

// ANSWER
function maxAscendingSum(nums: number[]): number {
  let max = nums[0],
    sum = nums[0]
  for (let i = 1; i < nums.length; ++i) {
    if (nums[i] > nums[i - 1]) {
      sum += nums[i]
    } else {
      sum = nums[i]
    }
    max = Math.max(max, sum)
  }
  return max
}
