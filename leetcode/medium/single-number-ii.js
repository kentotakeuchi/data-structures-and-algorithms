// https://leetcode.com/problems/single-number-ii/

/**
 * @param {number[]} nums
 * @return {number}
 */

// MINE
// var singleNumber = function(nums) {
//     // naive approach
//     // create map
//     const map = new Map();

//     // loop over nums to store nums in map
//     for(const num of nums) {
//         if(map.has(num)) {
//             map.set(num, map.get(num)+1)
//         } else {
//             map.set(num, 1)
//         }
//     }
//     console.log({map})

//     //find num of one appearance
//     for(const key of map.keys()) {
//         if(map.get(key) === 1) {
//             return key;
//         }
//     }

//     // if no target num
//     return null;

//     // improved one
//     // ...
// };

// ANOTHER ANSWER
var singleNumber = function (nums) {
  let ones = 0; // to collect bits that appear once
  let twos = 0; // to collect bits that appear twice
  let threes = 0; // to collect bits that appear three times

  for (const num of nums) {
    // twos is the union of itself and bits that just
    // appear the second time with the new number.
    twos = twos | (ones & num);
    ones = ones ^ num;
    threes = ones & twos;

    // remove threes from ones and twos
    ones = ones & ~threes;
    twos = twos & ~threes;
  }

  return ones;
};
