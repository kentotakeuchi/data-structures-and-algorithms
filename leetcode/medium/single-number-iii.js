// https://leetcode.com/problems/single-number-iii/

/**
 * @param {number[]} nums
 * @return {number[]}
 */

// MINE: not meet the requirement..
// var singleNumber = function(nums) {
//     const map = new Map()
//     const results = []

//     for(let num of nums) {
//         if(map.has(num)) {
//             map.set(num, map.get(num) + 1)
//         } else {
//             map.set(num, 1)
//         }
//     }

//     map.forEach((value, key) => {
//         if(value === 1) {
//             results.push(key)
//         }
//     })

//     return results
// };

// ANSWER
var singleNumber = function (nums) {
  let set = new Set();
  nums.forEach((x) => (set.has(x) ? set.delete(x) : set.add(x)));
  return Array.from(set);
};
