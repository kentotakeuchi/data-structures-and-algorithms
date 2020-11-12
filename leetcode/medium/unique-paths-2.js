// https://leetcode.com/problems/unique-paths-ii/

/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */

// MINE..
// var uniquePathsWithObstacles = function(obstacleGrid) {
//     debugger
//     const m = obstacleGrid.length // row
//     const n = obstacleGrid[0].length // col
//     return helper(m, n, 1, 1, obstacleGrid);
// };

// var helper = (m, n, row, col, arr)  => {
//     if(arr[m-1][n-1] === 1) {
//         return 0
//     }
//     if(row === m && col === n) return 1
//     if(row > m || col > n || arr[row-1][col-1] === 1) return 0

//     const pathsRight = helper(m, n, row, col+1, arr)
//     const pathsDown = helper(m, n, row+1, col, arr)

//     return pathsRight + pathsDown
// }

// ANSWER: DYNAMIC PROGRAMMING
const uniquePathsWithObstacles = (obstacleGrid) => {
  let R = obstacleGrid.length;
  let C = obstacleGrid[0].length;

  // If the starting cell has an obstacle, then simply return as there would be
  // no paths to the destination.
  if (obstacleGrid[0][0] == 1) {
    return 0;
  }

  // Number of ways of reaching the starting cell = 1.
  obstacleGrid[0][0] = 1;

  // Filling the values for the first column
  for (let i = 1; i < R; i++) {
    obstacleGrid[i][0] =
      obstacleGrid[i][0] == 0 && obstacleGrid[i - 1][0] == 1 ? 1 : 0;
  }

  // Filling the values for the first row
  for (let i = 1; i < C; i++) {
    obstacleGrid[0][i] =
      obstacleGrid[0][i] == 0 && obstacleGrid[0][i - 1] == 1 ? 1 : 0;
  }

  // Starting from cell(1,1) fill up the values
  // No. of ways of reaching cell[i][j] = cell[i - 1][j] + cell[i][j - 1]
  // i.e. From above and left.
  for (let i = 1; i < R; i++) {
    for (let j = 1; j < C; j++) {
      if (obstacleGrid[i][j] == 0) {
        obstacleGrid[i][j] = obstacleGrid[i - 1][j] + obstacleGrid[i][j - 1];
      } else {
        obstacleGrid[i][j] = 0;
      }
    }
  }

  // Return value stored in rightmost bottommost cell. That is the destination.
  return obstacleGrid[R - 1][C - 1];
};
