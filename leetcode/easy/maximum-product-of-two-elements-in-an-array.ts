// https://leetcode.com/problems/maximum-product-of-two-elements-in-an-array/

// MINE
/*
function maxProduct(nums: number[]): number {
    let max1 = 0, max2 = 0
    
    for(let i=0; i<nums.length; ++i) {
        if(nums[i] >= max1) {
            max2 = max1
            max1 = nums[i]
        } else if(nums[i] >= max2) {
            max2 = nums[i]
        }
    }
    
    return (max1-1) * (max2-1)
};
*/

// ANSWER: two pointers
function maxProduct(nums: number[]): number {
  let max = 0
  for (let i = 0, j = nums.length - 1; i < j; ) {
    max = Math.max(max, (nums[i] - 1) * (nums[j] - 1))
    nums[i] < nums[j] ? ++i : --j
  }
  return max
}
