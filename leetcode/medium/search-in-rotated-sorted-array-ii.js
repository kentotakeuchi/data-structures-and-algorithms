// https://leetcode.com/problems/search-in-rotated-sorted-array-ii/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */

// MINE
// var search = function(nums, target) {
//     let left = 0;
//     let right = nums.length-1;

//     while(left <= right) {
//         let mid = Math.floor((left + right) / 2);

//         if(nums[mid] === target) return true;

//         // left
//         if(nums[left] <= nums[mid]) {
//             if(nums[left] <= target && target <= nums[mid]) {
//                 right = mid-1;
//             } else {
//                 left = mid+1;
//             }
//         }
//         // right
//         else {
//             if(nums[mid] <= target && target <= nums[right]) {
//                 left = mid+1;
//             } else {
//                 right = mid-1;
//             }
//         }
//     }

//     return false;
// };

// ANSWER
var search = function (nums, target) {
  let left = 0,
    right = nums.length - 1;

  while (left < right) {
    let mid = left + parseInt((right - left) / 2); // lower mid

    if (nums[mid] == nums[right]) right--;
    // the only difference between Q.33
    else if (nums[mid] < nums[right]) {
      // right part sorted
      if (target > nums[mid] && target <= nums[right]) left = mid + 1;
      else right = mid;
    } else {
      if (target > nums[mid] || target < nums[left]) left = mid + 1;
      else right = mid;
    }
  }
  return nums[left] == target;
};
