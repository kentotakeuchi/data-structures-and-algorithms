// https://leetcode.com/problems/gray-code/

/**
 * @param {number} n
 * @return {number[]}
 */

// MINE..
// var grayCode = function(n) {

// };

// ANSWER
var grayCode = function (n) {
  if (n === 0) return [0];
  const res = grayCode(n - 1);
  const mask = 1 << (n - 1);
  for (let i = res.length - 1; i >= 0; i--) {
    res.push(res[i] | mask);
  }
  return res;
};

// e.g.: 9 << 3 translates to: 9 * (2 ** 3) = 9 * (8) = 72.
