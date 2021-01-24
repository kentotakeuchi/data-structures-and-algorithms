// https://leetcode.com/problems/maximal-square/

/**
 * @param {character[][]} matrix
 * @return {number}
 */

// MINE..
// var maximalSquare = function(matrix) {
//     // how to iterate through 2d array? -> maybe recursion
//     // once found 1 -> how to check maximal square?
//     // whats the condition?
//         // m = n
//         // matrix[m][n] = 1

//     let max = 0
//     helper(matrix, [], 0, 0)
//     return max

//     function helper(matrix, cur, row, col) {
//         if(matrix.length <= row) return
//         if(matrix[row].length <= col) {
//             helper(matrix, cur, ++row, 0)
//         }

//         if(matrix[row][col] === 0) {
//             helper(matrix, cur, row, ++col)
//         }
//     }
// };

// ANSWER: DP
var maximalSquare = function (matrix) {
  if (!matrix.length) return 0;
  let dp = new Array(matrix.length + 1)
    .fill(0)
    .map(() => new Array(matrix[0].length + 1).fill(0));
  let max = 0;
  for (let r = 1; r < dp.length; r++) {
    for (let c = 1; c < dp[0].length; c++) {
      if (matrix[r - 1][c - 1] != 0) {
        dp[r][c] = Math.min(dp[r][c - 1], dp[r - 1][c], dp[r - 1][c - 1]) + 1;
        max = Math.max(dp[r][c], max);
      }
    }
  }
  return max ** 2;
};
