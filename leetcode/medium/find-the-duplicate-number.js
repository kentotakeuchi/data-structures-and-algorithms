// https://leetcode.com/problems/find-the-duplicate-number/

/**
 * @param {number[]} nums
 * @return {number}
 */

// MINE
// var findDuplicate = function(nums) {
//     // O(n) space comlexity
//     const map = new Map()
//     for(let num of nums) {
//         if(map.has(num)) {
//             return num
//         } else {
//             map.set(num, 1)
//         }
//     }
//     return -1
// };

// ANSWER: Floyd's Tortoise and Hare (Cycle Detection)
var findDuplicate = function (nums) {
  let slow = nums[0];
  let fast = nums[nums[0]];

  while (slow != fast) {
    // we are guaranteed to have a cycle
    slow = nums[slow];
    fast = nums[nums[fast]];
  }

  slow = 0;

  while (slow != fast) {
    slow = nums[slow];
    fast = nums[fast];
  }

  return slow;
};
