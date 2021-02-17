// https://leetcode.com/problems/range-sum-query-2d-immutable/

// MINE
/**
 * @param {number[][]} matrix
 */
// var NumMatrix = function(matrix) {
//     this.matrix = matrix
// };

// /**
//  * @param {number} row1
//  * @param {number} col1
//  * @param {number} row2
//  * @param {number} col2
//  * @return {number}
//  */
// NumMatrix.prototype.sumRegion = function(row1, col1, row2, col2) {
//     let sum = 0
//     for(let row = row1; row <= row2; row++) {
//         for(let col = col1; col <= col2; col++) {
//             sum += this.matrix[row][col]
//         }
//     }
//     return sum
// };

// /**
//  * Your NumMatrix object will be instantiated and called as such:
//  * var obj = new NumMatrix(matrix)
//  * var param_1 = obj.sumRegion(row1,col1,row2,col2)
//  */

// ANSWER
var NumMatrix = function (matrix) {
  if (!matrix.length || !matrix[0].length) {
    this.sum = [[]];
    return;
  }
  this.sum = new Array(matrix.length + 1)
    .fill(0)
    .map((val) => new Array(matrix[0].length + 1).fill(0));
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      this.sum[i + 1][j + 1] =
        this.sum[i][j + 1] + this.sum[i + 1][j] - this.sum[i][j] + matrix[i][j];
    }
  }
};

NumMatrix.prototype.sumRegion = function (row1, col1, row2, col2) {
  return (
    this.sum[row2 + 1][col2 + 1] -
    (this.sum[row2 + 1][col1] + this.sum[row1][col2 + 1] - this.sum[row1][col1])
  );
};
