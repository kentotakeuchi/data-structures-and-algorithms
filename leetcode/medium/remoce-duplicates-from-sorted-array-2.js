// https://leetcode.com/problems/remove-duplicates-from-sorted-array-ii/

/**
 * @param {number[]} nums
 * @return {number}
 */

// MINE
// var removeDuplicates = function(nums) {
//     const map = {};
//     for(let i=0; i<nums.length; i++) {
//         console.log(map[nums[i]])
//         if(map[nums[i]] > 1) {
//             continue;
//         } else if(map[nums[i]]) {
//             map[nums[i]]++;
//         } else {
//             map[nums[i]] = 1;
//         }
//         console.log({map})
//     }

//     return nums.length;
// };

// ANSWER
const removeDuplicates = (nums) => {
  let j = 0;
  let i = 0;

  for (; i < nums.length; i += 1) {
    if (nums[i] !== nums[i + 2]) {
      nums[j] = nums[i];
      j += 1;
    }
  }

  return j;
};
