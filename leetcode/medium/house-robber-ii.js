// https://leetcode.com/problems/house-robber-ii/

/**
 * @param {number[]} nums
 * @return {number}
 */

// MINE
// var rob = function(nums) {
//     if(nums.length === 1) return nums[0]

//     const len = nums.length
//     let isOdd = len % 2 !== 0
//     let max = 0

//     for(let i=0; i<len; i++) {
//         let current = 0

//         if(isOdd) {
//             for(let j=i; j<len-1; j += 2) {
//                 console.log(i, j, current, nums[j])
//                 current += nums[j]
//                 console.log(i, j, current, nums[j])
//             }
//         } else {
//             for(let j=i; j<len; j += 2) {
//                 current += nums[j]
//             }
//         }

//         max = Math.max(max, current)
//     }

//     return max
// };

// ANSWER
var rob = function (nums) {
  const N = nums.length;
  if (N === 0) return 0;
  if (N === 1) return nums[0];

  // robbing first house
  const dp = [nums[0], Math.max(nums[0], nums[1])];

  // robbing last house
  const dp2 = [0, nums[1]];

  for (let i = 2; i < N; i++) {
    dp[i] = i === N - 1 ? dp[i - 1] : Math.max(dp[i - 1], dp[i - 2] + nums[i]);
    dp2[i] = Math.max(dp2[i - 1], dp2[i - 2] + nums[i]);
  }

  return Math.max(dp[N - 1], dp2[N - 1]);
};
