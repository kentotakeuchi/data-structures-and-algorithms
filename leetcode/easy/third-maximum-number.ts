// https://leetcode.com/problems/third-maximum-number/

// MINE: set, sort(not O(n))
/*
function thirdMax(nums: number[]): number {
    nums = [...new Set(nums)]
    
    if(nums.length < 3) return Math.max(...nums)
    
    // desc order
    nums.sort((a, z) => z - a)
    
    return nums[2]
};
*/

// ANSWER
/*
function thirdMax(nums: number[]): number {
    let first = -Infinity;
    let second = -Infinity;
    let third = -Infinity;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === first || nums[i] === second || nums[i] === third) continue;
        if (nums[i] > first) {
          [first, second, third] = [nums[i], first, second];
        } else if (nums[i] > second) {
          [second, third] = [nums[i], second];
        } else if (nums[i] > third) {
          third = nums[i];
        }
    }
    return third === -Infinity ? first : third;
}
*/

// ANSWER: avoid sort
function thirdMax(nums: number[]): number {
  if (nums.length < 3) return Math.max(...nums)
  let u = new Set(nums)
  if (u.size < 3) return Math.max(...u)

  for (let i = 0; i < 2; i++) {
    u.delete(Math.max(...u))
  }

  return Math.max(...u)
}
