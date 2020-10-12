// https://leetcode.com/problems/4sum/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */

// SOLUTION
var fourSum = function (nums, target) {
  nums.sort((a, b) => a - b);
  const result = [];

  for (let i = 0; i < nums.length - 3; i++) {
    for (let j = i + 1; j < nums.length - 2; j++) {
      let low = j + 1;
      let high = nums.length - 1;

      while (low < high) {
        const sum = nums[i] + nums[j] + nums[low] + nums[high];
        if (sum === target) {
          result.push([nums[i], nums[j], nums[low], nums[high]]);
          while (nums[low] === nums[low + 1]) low++;
          while (nums[high] === nums[high - 1]) high--;
          low++;
          high--;
        } else if (sum < target) {
          low++;
        } else {
          high--;
        }
      }
      while (nums[j] === nums[j + 1]) j++;
    }
    while (nums[i] === nums[i + 1]) i++;
  }
  return result;
};

// MINE: NOT SOLVED..
// var fourSum = function (nums, target) {
//   if (nums.length < 4) return [];

//   const results = [];

//   nums.sort((a, z) => a - z);

//   for (let i = 0; i < nums.length; i++) {
//     let j = i + 1;
//     let k = j + 1;
//     let l = nums.length - 1;

//     while (k < l) {
//       const sum = nums[i] + nums[j] + nums[k] + nums[l];

//       if (sum === target) {
//         results.push([nums[i], nums[j], nums[k], nums[l]]);
//       } else if (sum > target) {
//         break;
//       } else {
//         ++k;
//       }
//     }
//   }

//   return results;
// };

// fourSum([1,0,-1,0,-2,2], 0)
