// https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/

/**
 * @param {number[]} nums
 * @return {number}
 */

// MINE
// var findMin = function(nums) {
//     if(nums.length === 1) return nums[0]

//     let left = 0
//     let right = nums.length - 1

//     if(nums[0] < nums[right]) return nums[0]

//     while(left <= right) {
//         let mid = Math.floor(left + (right - left) / 2)
//         console.log({mid, left, right})

//         if(nums[mid] > nums[mid + 1]) return nums[mid + 1]

//         if(nums[mid - 1] > nums[mid]) return nums[mid]

//         if(nums[0] < nums[mid]) {
//             left = mid + 1
//         } else {
//             right = mid - 1
//         }
//     }

//     return -1
// };

// ANSWER
function findMin(nums) {
  let l = 0;
  let r = nums.length - 1;
  while (l < r) {
    const m = Math.floor((l + r) / 2);
    if (nums[m] > nums[r]) l = m + 1;
    else r = m;
  }
  return nums[l];
}
