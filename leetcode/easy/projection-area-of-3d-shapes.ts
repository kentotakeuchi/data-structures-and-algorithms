// https://leetcode.com/problems/projection-area-of-3d-shapes/

// MINE..
/*
function projectionArea(grid: number[][]): number {

};
*/

// ANSWER
/*
function projectionArea(grid: number[][]): number {
        let res = 0, n = grid.length;
        for (let i = 0; i < n; ++i) {
            let x = 0, y = 0;
            for (let j = 0; j < n; ++j) {
                x = Math.max(x, grid[i][j]);
                y = Math.max(y, grid[j][i]);
                if (grid[i][j] > 0) ++res;
            }
            res += x + y;
        }
        return res;
    }
    */

// ANSWER: easier to understand
function projectionArea(grid: number[][]): number {
  let res = 0
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] > 0) res++
    }
    res += Math.max(...grid[i])
    res += Math.max(...grid.map(r => r[i]))
  }
  return res
}
