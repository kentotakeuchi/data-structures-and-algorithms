// https://leetcode.com/problems/count-hills-and-valleys-in-an-array/

// MINE
/*
function countHillValley(nums: number[]): number {
    let ans = 0, prev = nums[0], next = nums[2]
    for(let i=1; i<nums.length-1; ++i) {
        if(nums[i] === next) {
            while(nums[i] === next) {
                ++i
                next = nums[i+1]
            }
        }
        if(prev < nums[i] && nums[i] > next ||
          prev > nums[i] && nums[i] < next) ++ans
        prev = nums[i]
        next = nums[i+2]
    }
    return ans
};
*/

// ANSWER
function countHillValley(nums: number[]): number {
  const A = [nums[0]]
  let ans = 0
  for (let i = 1; i < nums.length; ++i) if (nums[i - 1] !== nums[i]) A.push(nums[i])
  for (let i = 1; i < A.length - 1; ++i) {
    if ((A[i - 1] < A[i] && A[i] > A[i + 1]) || (A[i - 1] > A[i] && A[i] < A[i + 1])) ++ans
  }
  return ans
}
