// https://leetcode.com/problems/largest-local-values-in-a-matrix/

// MINE
/*
function largestLocal(grid: number[][]): number[][] {
    const n = grid.length
    const ans = new Array(n-2).fill(0).map(el => new Array())
    let idx = 0
    console.log({ans})
    for(let col=2; col<n; ++col) {
        for(let row=2; row<n; ++row) {
            let max = 0
            for(let i=col-2; i<=col; ++i) {
                for(let j=row-2; j<=row; ++j) {
                    if(grid[i][j] > max) max = grid[i][j]
                }
            }
            ans[idx].push(max)
        }
        ++idx
    }
    return ans
};
*/

// ANSWER
function largestLocal(grid: number[][]): number[][] {
  const n = grid.length
  const ans = new Array(n - 2).fill(0).map(el => new Array(n - 2).fill(0))
  for (let i = 0; i < n - 2; ++i)
    for (let j = 0; j < n - 2; ++j)
      for (let ii = i; ii < i + 3; ++ii)
        for (let jj = j; jj < j + 3; ++jj) ans[i][j] = Math.max(ans[i][j], grid[ii][jj])
  return ans
}
