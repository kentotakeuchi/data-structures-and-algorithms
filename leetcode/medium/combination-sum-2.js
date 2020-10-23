// https://leetcode.com/problems/combination-sum-ii/

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */

// MINE..
// var combinationSum2 = function(candidates, target) {
//     // edge cases
//     if(candidates.length === 0) return [[]];
//     if(candidates.length === 1 && candidates[0] === target) return [[target]];
//     else if(candidates.length === 1 && candidates[0] !== target) return [[]];

//     // sort asc [1,1,2,5,6,7,10]
//     // const results[]
//     // loop > right should be less than target

//     // recursive find helper func(target, curPath, index)
//         // target = 0 -> results.push(curPath)
//         // target < 0 -> sum could NOT be target > return;
//         // target > 0 ->

//     candidates.sort((a, z) => a - z);

//     const results = [];

//     const find = (tar, curPath, i) => {
//         console.log({tar, curPath, i});

//         if(tar === 0) {
//             results.push(curPath);
//             return;
//         } else if(tar < 0) {
//             return;
//         } else {
//             while(i < candidates.length && tar - candidates[i] >= 0) {
//                 find(tar - candidates[i], [...curPath, candidates[i]], i);
//                 i++;
//             }
//         }
//     }
//     find(target, [], 0);

//     return results;
// };

// ANSWER
var combinationSum2 = function (candidates, target) {
  candidates.sort((a, b) => a - b);

  let res = [];
  let dfs = function (id, n, comb) {
    if (n == 0) {
      res.push(comb);
      return;
    }

    for (let i = id; i < candidates.length; i++) {
      if (candidates[i] <= n) {
        dfs(i + 1, n - candidates[i], [...comb, candidates[i]]);
      }
      while (candidates[i + 1] == candidates[i]) i++;
    }
    return res;
  };

  dfs(0, target, []);
  return res;
};
