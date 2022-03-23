// https://leetcode.com/problems/determine-whether-matrix-can-be-obtained-by-rotation/

// MINE..
/*
function findRotation(mat: number[][], target: number[][]): boolean {
    let top = 0, right = mat.length-1, bottom = mat.length-1, left = 0
    
    while(top <= bottom || left <= right) {
        for(let col = left; col < right; ++col) {
            mat[top][col+1] = mat[top][col]
        }
        ++top
    }
    
};
*/

// ANSWER
/*
function findRotation(mat: number[][], target: number[][]): boolean {
    for(let i=0; i<4; ++i) {
        if(same(mat, target)) return true
        mat = rotate(mat)
    }
    return false
    
    function same(mat: number[][], target: number[][]): boolean {
        if(mat.length === target.length && mat[0].length === target[0].length) {
            for(let i=0; i<mat.length; ++i) {
                for(let j=0; j<mat[0].length; ++j) {
                    if(mat[i][j] !== target[i][j]) return false
                }
            }
            return true
        }
        return false
    }
    
    function rotate(mat: number[][]): number[][] {
        const n = mat.length, m = mat[0].length, rotated = new Array(n).fill(0).map(el => new Array(m).fill(0))
        for(let i=0; i<n; ++i) {
            for(let j=0; j<m; ++j) rotated[j][n-i-1] = mat[i][j]
        }
        return rotated
    }
}
*/

// ANSWER
function findRotation(mat: number[][], target: number[][]): boolean {
  let width = mat[0].length
  let height = mat.length

  let normal = true
  let rightOneTime = true
  let rightTwoTimes = true
  let rightThreeTimes = true
  for (let i = 0; i < height; i++) {
    for (let j = 0; j < width; j++) {
      // don't rotate mat
      if (mat[i][j] !== target[i][j]) {
        normal = false
      }
      // rotate mat right 1 time
      if (mat[i][j] !== target[j][width - 1 - i]) {
        rightOneTime = false
      }
      // rotate mat right 2 times
      if (mat[i][j] !== target[height - 1 - i][width - 1 - j]) {
        rightTwoTimes = false
      }
      // rotate mat right 3 times
      if (mat[i][j] !== target[height - 1 - j][i]) {
        rightThreeTimes = false
      }
      if (!normal && !rightOneTime && !rightTwoTimes && !rightThreeTimes) return false
    }
  }
  return normal || rightOneTime || rightTwoTimes || rightThreeTimes
}
