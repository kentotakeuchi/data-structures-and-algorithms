// https://leetcode.com/problems/surface-area-of-3d-shapes/

// MINE..
/*
function surfaceArea(grid: number[][]): number {

};
*/

// ANSWER
function surfaceArea(grid: number[][]): number {
  const height = grid.length
  const width = grid[0].length
  let sum = 0
  for (let i = 0; i < height; i++) {
    for (let j = 0; j < width; j++) {
      if (grid[i][j] > 0) sum += grid[i][j] * 4 + 2
      if (i > 0) sum -= 2 * Math.min(grid[i - 1][j], grid[i][j])
      if (j > 0) sum -= 2 * Math.min(grid[i][j - 1], grid[i][j])
    }
  }
  return sum
}
