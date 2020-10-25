// https://leetcode.com/problems/permutations/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */

// MINE
// var permute = function(nums) {
//     // if(!nums.length) return []
//     // results = []
//     //
// };

// const swap = (arr, i, j) => [arr[i], arr[j]] = [arr[j], arr[i]];

// ANSWER: DFS, BACKTRACKING
// https://leetcode.com/problems/permutations/discuss/685868/DFSbacktracking-PythonJavaJavascript-PICTURE
var permute = function (letters) {
  let res = [];
  dfs(letters, [], Array(letters.length).fill(false), res);
  return res;
};

function dfs(letters, path, used, res) {
  if (path.length == letters.length) {
    // make a deep copy since otherwise we'd be append the same list over and over
    res.push(Array.from(path));
    return;
  }

  for (let i = 0; i < letters.length; i++) {
    // skip used letters
    if (used[i]) continue;
    // add letter to permutation, mark letter as used
    path.push(letters[i]);
    used[i] = true;
    dfs(letters, path, used, res);
    // remove letter from permutation, mark letter as unused
    path.pop();
    used[i] = false;
  }
}
