// https://leetcode.com/problems/maximize-sum-of-array-after-k-negations/

// MINE
/*
function largestSumAfterKNegations(nums: number[], k: number): number {
    while(k > 0){ 
        let v = Math.min(...nums)
        let i = nums.indexOf(v)
        nums[i] = - nums[i]
        k--
    }
    
    return nums.reduce((acc,cur) => acc + cur, 0)
};
*/

// ANSWER
function largestSumAfterKNegations(nums: number[], k: number): number {
  nums.sort((a, z) => a - z)

  for (let i = 0; k > 0 && i < nums.length && nums[i] < 0; ++i, --k) nums[i] = -nums[i]

  let res = 0
  let min = Infinity

  for (let num of nums) {
    res += num
    min = Math.min(min, num)
  }

  return res - (k % 2) * min * 2
}
