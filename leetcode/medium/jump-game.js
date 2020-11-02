// https://leetcode.com/problems/jump-game/

/**
 * @param {number[]} nums
 * @return {boolean}
 */

// MINE..
// var canJump = function(nums) {
//     // iterate over nums[]
//         // last idx > ex.4
//         // cur idx > ex.0
//         // idx after jump > curIdx = curIdx + nums[curIdx]
//         // check curIdx = lastIdx

//     if(nums.length === 1) return true;

//     const lastIdx = nums.length-1;

//     for(let i=0; i<lastIdx; i++) {
//         if(i + nums[i] >= lastIdx) return true;
//     }

//     return false;
// };

// ANSWER: GREEDY
var canJump = function (nums) {
  let idx = 0;
  let max = 0;
  let target = nums.length - 1;

  while (idx < nums.length) {
    max = Math.max(max, idx + nums[idx]);

    if (max >= target) {
      return true;
    }

    if (max <= idx && nums[idx] === 0) {
      return false;
    }

    idx++;
  }

  return false;
};
