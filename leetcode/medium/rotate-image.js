// https://leetcode.com/problems/rotate-image/

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */

// MINE..
var rotate = function (matrix) {
  // [[1,2,3],[4,5,6],[7,8,9]]
  // [[7,4,1],[8,5,2],[9,6,3]]
};

// ANSWER:  Transpose and then reverse
var rotate = function (matrix) {
  let n = matrix.length;

  // transpose matrix
  for (let i = 0; i < n; i++) {
    for (let j = i; j < n; j++) {
      let tmp = matrix[j][i];
      matrix[j][i] = matrix[i][j];
      matrix[i][j] = tmp;
    }
  }

  // reverse each row
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n / 2; j++) {
      let tmp = matrix[i][j];
      matrix[i][j] = matrix[i][n - j - 1];
      matrix[i][n - j - 1] = tmp;
    }
  }
};
