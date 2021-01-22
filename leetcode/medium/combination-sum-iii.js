// https://leetcode.com/problems/combination-sum-iii/

/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */

// MINE
// var combinationSum3 = function(k, n) {
//     let nums = [1,2,3,4,5,6,7,8,9]
//     const results = []

//     // if n(sum) is less than 9, remove larger numbers than n
//     if(n < 9) {
//         nums = nums.slice(0, n)
//     }

//     // ?: how to loop k times to find all possible combinations?
//     // loop through nums
//     for(let i=0; i<nums.length; i++) {
//         const combs = []

//         // loop k times
//         for(let j=i; j<k; j++) {

//         }
//     }
// };

// ANSWER1
// var combinationSum3 = function(k, n) {
//   var result = [];
//   search(1, [], k, n);
//   return result;

//   function search(from, prefix, k, n) {
//     if (k === 0 && n === 0) return result.push(prefix);
//     if (from > 9) return;
//     prefix.push(from);
//     search(from + 1, prefix.slice(0), k - 1, n - from);
//     prefix.pop();
//     search(from + 1, prefix.slice(0), k, n);
//   }
// };

// ANSWER2
var combinationSum3 = function (k, n) {
  const res = [];

  function permute(arr, sum, start) {
    if (sum > n) return;

    if (arr.length === k) {
      if (sum === n) res.push(arr);
      return;
    }

    for (let i = start; i < 10; i++) {
      permute([...arr, i], sum + i, i + 1);
    }
  }
  permute([], 0, 1);
  return res;
};
