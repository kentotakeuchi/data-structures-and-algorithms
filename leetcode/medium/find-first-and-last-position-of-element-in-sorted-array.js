// https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// MINE..
// var searchRange = function(nums, target) {
//     const results = [-1, -1];

//     if(nums.length === 0) return results;

//     let left = 0;
//     let right = nums.length - 1;
//     let mid = Math.floor(right / 2)

//     while(left < right) {
//         if(nums[mid] === target) {
//             if(nums[mid-1] === nums[mid] && nums[mid+1] !== nums[mid]) {
//                 results[1] = mid;
//             } else if(nums[mid-1] !== nums[mid] && nums[mid+1] === nums[mid]) {
//                 results[0] = mid;
//             } else {

//             }
//         }
//     }

//     return results;
// };

// ANSWER
var searchRange = function (nums, target) {
  const length = nums.length - 1;
  let start = 0;
  let end = length;
  let center;

  // get the center
  while (start <= end) {
    center = Math.floor((start + end) / 2);
    if (nums[center] === target) {
      start = center;
      end = center;
      break;
    } else if (nums[center] < target) start = center + 1;
    else end = center - 1;
  }

  if (start > end) return [-1, -1];

  // find the edges
  while (nums[start - 1] === target) start--;
  while (nums[end + 1] === target) end++;
  return [start, end];
};
