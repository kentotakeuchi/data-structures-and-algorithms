// https://leetcode.com/problems/summary-ranges/

/**
 * @param {number[]} nums
 * @return {string[]}
 */

// MINE
// var summaryRanges = function(nums) {
//     // edge case
//     if(!nums.length) return nums
//     if(nums.length === 1) {
//         nums[0] = nums[0].toString()
//         return nums
//     }

//     const results = []
//     let start = 0

//     while(start < nums.length) {
//         let end = start + 1
//         if(nums[start] !== nums[end]-1) {
//             results.push(`${nums[start]}`)
//             start = end
//             continue
//         }

//             console.log({start, end, results})

//         while(nums[end-1] === nums[end]-1) {
//             ++end
//         }

//         results.push(`${nums[start]}->${nums[end-1]}`)
//         start = end
//     }

//     return results
// };

// ANSWER
var summaryRanges = function (nums) {
  var t = 0;
  var ans = [];
  nums.push('#');
  for (var i = 1; i < nums.length; i++)
    if (nums[i] - nums[t] !== i - t) {
      if (i - t > 1) ans.push(nums[t] + '->' + nums[i - 1]);
      else ans.push(nums[t].toString());
      t = i;
    }
  return ans;
};
