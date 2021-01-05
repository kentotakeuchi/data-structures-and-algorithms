// https://leetcode.com/problems/find-peak-element/

/**
 * @param {number[]} nums
 * @return {number}
 */

// MINE
// var findPeakElement = function(nums) {
//     const max = Math.max(...nums)
//     if(nums[0] === max) return 0
//     if(nums[nums.length-1] === max) return nums.length-1

//     for(let i=1; i<nums.length-1; i++) {
//         if(nums[i-1] < nums[i] && nums[i] > nums[i+1]) {
//             return i
//         }
//     }
// };

// ANSWER: LINEAR SCAN
// var findPeakElement = function(nums) {
//     for(let i=0; i<nums.length; i++) {
//         if(nums[i] > nums[i+1]) {
//             return i
//         }
//     }
//     return nums.length - 1
// };

// ANSWER: RECURSIVE BINARY SEARCH
var findPeakElement = function (nums) {
  return search(nums, 0, nums.length - 1);
};

function search(nums, l, r) {
  if (l === r) return l;

  const mid = Math.floor((l + r) / 2);
  if (nums[mid] > nums[mid + 1]) {
    return search(nums, l, mid);
  }
  return search(nums, mid + 1, r);
}
