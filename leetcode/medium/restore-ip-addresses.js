// https://leetcode.com/problems/restore-ip-addresses/

/**
 * @param {string} s
 * @return {string[]}
 */

// MINE..
// var restoreIpAddresses = function(s) {
//     // how to devide into 4 int?
//     // 0 - 255
//     // no "0" prefix
// };

// ANSWER: DFS, BACKTRACKING
var restoreIpAddresses = function (s) {
  let res = [];
  let arr = [];

  let dfs = function (arr, s) {
    let prev = arr[arr.length - 1];
    if (prev > 255) return false;
    if (arr.length < 4 && s == '') return false;
    if (prev && prev.length > 1 && prev[0] == '0') return false; // checks leading 0

    if (arr.length == 3) {
      if (s > 255 || (s.length > 1 && s[0] == '0')) return false;
      else {
        res.push([...arr, s].join('.'));
        return true;
      }
    }

    for (let i = 1; i < 4; i++) {
      dfs([...arr, s.slice(0, i)], s.slice(i));
    }
  };

  dfs(arr, s);
  return res;
};
