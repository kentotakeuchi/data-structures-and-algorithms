// https://leetcode.com/problems/check-if-matrix-is-x-matrix/

// MINE
function checkXMatrix(grid: number[][]): boolean {
  const n = grid.length
  for (let i = 0; i < n; ++i) {
    for (let j = 0; j < n; ++j) {
      if (i === j || i === n - j - 1) {
        if (!grid[i][j]) return false
      } else {
        if (grid[i][j]) return false
      }
    }
  }
  return true
}

// ANSWER
