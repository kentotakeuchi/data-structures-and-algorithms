// https://leetcode.com/problems/subsets-ii/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */

// MINE..
// var subsetsWithDup = function(nums) {
//     const results = [];
//     createSubset([], 0);

//     function createSubset(path, idx) {
//         results.push(path);

//         for(let i=idx; i<nums.length; i++) {
//             createSubset([...path, nums[i]], i + 1);
//         }
//     }

//     return results;
// };

// subsetsWithDup([1, 2, 2])

// ANSWER: not work..
// const subsetsWithDup = (nums) => {
//     const results = [];

//     if(!nums || nums.length === 0) return nums;

//     nums = nums.sort((a, z) => a - z);

//     const subset = [];
//     findAllSubsets(nums, results, subset, 0);

//     return results;
// }

// const findAllSubsets = (nums, results, subset, idx) => {
//     results.push(subset);

//     for(let i=idx; i<nums.length; i++) {
//         if(i !== idx && nums[i] === nums[i-1]) continue;

//         subset.push(nums[i]);
//         findAllSubsets(nums, results, subset, i+1);
//         subset.pop();
//     }
// }

// ANSWER
var subsetsWithDup = function (nums) {
  nums = nums.sort((a, b) => a - b);

  const res = [];

  function fn(length, start = 0, arr = []) {
    if (arr.length === length) {
      res.push(arr.slice());
      return;
    }
    for (let i = start; i < nums.length; i++) {
      if (i !== start && nums[i - 1] === nums[i]) continue;
      arr.push(nums[i]);
      fn(length, i + 1, arr);
      arr.pop();
    }
  }

  for (let length = 0; length <= nums.length; length++) {
    fn(length);
  }

  return res;
};
