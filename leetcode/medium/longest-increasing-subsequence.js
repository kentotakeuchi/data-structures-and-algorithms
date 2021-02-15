// https://leetcode.com/problems/longest-increasing-subsequence/

/**
 * @param {number[]} nums
 * @return {number}
 */

// MINE.. tmr..
// var lengthOfLIS = function(nums) {
//     let min = nums[0]
//     let minIdx = 0
//     for(let i=1; i<nums.length; i++) {
//         if(nums[i] < min) {
//             min = nums[i]
//             minIdx = i
//         }
//     }
//     console.log({min})

//     const results = [min]
//     let max = min
//     for(let i=minIdx+1; i<nums.length; i++) {
//         if(max < nums[i]) {
//             results.push(nums[i])
//             max = nums[i]
//         }
//     }

//     return results.length
// };

// ANSWER: O(2^n) brute force
// var lengthOfLIS = function(nums) {
//     return _lengthOfLIS(nums, -Infinity, 0)
// }

// function _lengthOfLIS(nums, prev, curpos) {
//     if(curpos === nums.length) {
//         return 0
//     }

//     let taken = 0
//     if(nums[curpos] > prev) {
//         taken = 1 + _lengthOfLIS(nums, nums[curpos], curpos + 1)
//     }
//     let nottaken = _lengthOfLIS(nums, prev, curpos + 1)

//     return Math.max(taken, nottaken)
// }

// ANSWER: dp
function lengthOfLIS(nums) {
  var lis = [];
  for (var i = 0; i < nums.length; i++) {
    lis.push(1);
    for (var j = 0; j < i; j++) {
      if (nums[j] < nums[i]) lis[i] = Math.max(lis[i], lis[j] + 1);
    }
  }
  return nums.length ? Math.max.apply(null, lis) : 0;
}
