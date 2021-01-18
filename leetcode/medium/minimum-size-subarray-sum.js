// https://leetcode.com/problems/minimum-size-subarray-sum/

/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */

// MINE
// var minSubArrayLen = function(s, nums) {
//     let minLen = Infinity
//     for(let i=0, j=1; j<nums.length; i++, j++) {
//         const subArr = nums.slice(i, )
//     }
// };

// ANSWER
var minSubArrayLen = function (s, nums) {
  let distance = Number.MAX_SAFE_INTEGER;
  let left = 0;
  let sum = 0;
  // left pointer and right pointer defines the window.
  // the goal is to find the smallest window that has a sum of s or larger.
  for (let right = 0; right < nums.length; right++) {
    sum += nums[right];
    while (sum >= s) {
      distance = Math.min(distance, right - left + 1);
      sum -= nums[left];
      left += 1;
    }
  }

  return distance === Number.MAX_SAFE_INTEGER ? 0 : distance;
};
