// https://leetcode.com/problems/product-of-array-except-self/

/**
 * @param {number[]} nums
 * @return {number[]}
 */

// MINE..
// var productExceptSelf = function(nums) {
//     // O(n^2)..
//     const output = []
//     for(let i=0; i<nums.length; i++) {
//         let sum = 1
//         for(let j=0; j<nums.length; j++) {
//             if(i === j) continue
//             sum *= nums[j]
//         }
//         output.push(sum)
//     }
//     return output
// };

// ANSWER
var productExceptSelf = function (nums) {
  var output = [];
  var leftMult = 1;
  var rightMult = 1;
  for (var i = nums.length - 1; i >= 0; i--) {
    output[i] = rightMult;
    rightMult *= nums[i];
  }
  for (var j = 0; j < nums.length; j++) {
    output[j] *= leftMult;
    leftMult *= nums[j];
  }
  return output;
};
