// https://leetcode.com/problems/sort-colors/

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

// MINE
// var sortColors = function(nums) {
//     const n = nums.length

//     if(n === 1) return nums;

//     for(let i=0; i<n; i++) {
//         for(let j=i+1; j<n; j++) {
//             if(nums[i] > nums[j]) {
//                 swap(nums, i, j)
//             }
//         }
//     }

//     return nums
// };

// var swap = (arr, i1, i2) => {
//     return [arr[i1], arr[i2]] = [arr[i2], arr[i1]]
// }

// ANOTHER ANSWER
// Example
// 0 0 | 1 | 2 1 | 2
//   l       i     r
function sortColors(nums) {
  function swap(i, j) {
    [nums[i], nums[j]] = [nums[j], nums[i]];
  }

  let l = 0;
  let r = nums.length - 1;
  let i = 0;

  while (i <= r) {
    const n = nums[i];
    if (n === 0) {
      swap(i, l);
      l++;
      i++;
    } else if (n === 2) {
      swap(i, r);
      r--;
    } else {
      i++;
    }
  }
}
