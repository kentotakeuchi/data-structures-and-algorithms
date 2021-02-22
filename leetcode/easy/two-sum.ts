// https://leetcode.com/problems/two-sum/

// MINE: brute force
// function twoSum(nums: number[], target: number): number[] {
//     for(let i=0; i<nums.length; i++) {
//         for(let j=i+1; j<nums.length; j++) {
//             if(nums[i] + nums[j] === target) {
//                 return [i, j]
//             }
//         }
//     }
// };

// ANSWER
var twoSum = function (nums: number[], target: number): number[] {
  let map = new Map();

  for (let i = 0; i < nums.length; i++) {
    if (map.has(target - nums[i])) {
      return [map.get(target - nums[i]), i];
    } else {
      map.set(nums[i], i);
    }
  }
  return [];
};
