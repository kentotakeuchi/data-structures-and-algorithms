// https://leetcode.com/problems/letter-combinations-of-a-phone-number/submissions/

/**
 * @param {string} digits
 * @return {string[]}
 */

// MINE..
// var letterCombinations = function(digits) {
//     const map = {
//         '2': [a, b, c],
//         '3': [d, e, f],
//         '4': [g, h, i],
//         '5': [j, k, l],
//         '6': [m, n, o],
//         '7': [p, q, r, s],
//         '8': [t, u, v],
//         '9': [w, x, y, z]
//     }
//     const results = [];

//     for(const num of digits) {

//         for(let i=0; i<map[num].length; i++) {
//             let letters = '';

//             for(let j=i+1; j<map[num].length; j++) {
//                 letters += map[num][i]
//             }
//         }
//     }
// };

// SOLUTION: BACK TRACKING
var letterCombinations = function (digits) {
  if (!digits.length) return [];

  const map = {
    2: ['a', 'b', 'c'],
    3: ['d', 'e', 'f'],
    4: ['g', 'h', 'i'],
    5: ['j', 'k', 'l'],
    6: ['m', 'n', 'o'],
    7: ['p', 'q', 'r', 's'],
    8: ['t', 'u', 'v'],
    9: ['w', 'x', 'y', 'z'],
  };

  const result = [];

  function permute(str, idx) {
    if (idx === digits.length) {
      result.push(str);
      return;
    }

    for (let alpha of map[digits[idx]]) {
      permute(str + alpha, idx + 1);
    }
  }
  permute('', 0);

  return result;
};
