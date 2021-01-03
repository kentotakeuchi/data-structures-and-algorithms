// https://leetcode.com/problems/maximum-product-subarray/

/**
 * @param {number[]} nums
 * @return {number}
 */

// MINE
// var maxProduct = function(nums) {
//     if(nums.length < 2) return nums[0]
//     let max = -Infinity
//     for(let i=0, j=i+2; i<nums.length-1; i++, j++) {
//         const sub = nums.slice(i, j)
//         console.log({i, j, sub})
//         const sum = sub[0] * sub[1]
//         max = Math.max(max, sum)
//     }

//     return max
// };

// ANSWER
var maxProduct = function (nums) {
  let prevMax = nums[0];
  let prevMin = nums[0];
  let result = nums[0];
  for (let i = 1; i < nums.length; i++) {
    // given the new number, the new maximun can have 3 conditions
    // 1. number(+) * prevMax(+) is the largest
    // 2. number(+) it self is the largest
    // 3. number(-) * prevMin(-) is the largest
    curMax = Math.max(nums[i] * prevMax, nums[i], nums[i] * prevMin);

    curMin = Math.min(nums[i] * prevMin, nums[i], nums[i] * prevMax);

    // updating the prevMax & prevMin, these two may swap locations
    prevMax = curMax;
    prevMin = curMin;

    result = Math.max(curMax, result);
  }
  return result;
};
