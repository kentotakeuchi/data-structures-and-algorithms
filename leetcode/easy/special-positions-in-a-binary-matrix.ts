// https://leetcode.com/problems/special-positions-in-a-binary-matrix/

// MINE: brute force..
/*
function numSpecial(mat: number[][]): number {
    let ans = 0
    const map = new Map()
    
    for(let row=0; row<mat.length; ++row) {
        let count = 0
        
        for(let col=0; col<mat[0].length; ++col) {
            if(mat[row][col] === 1) ++count
        }
        
        count === 1 && map.set(row, true)
    }
    
    for(let col=0; col<mat.length; ++col) {
        let count = 0
        
        for(let row=0; row<mat[0].length; ++row) {
            if(mat[row][col] === 1) {
                ++count
            }
        }
        
        if(count === 1) {
            
        }
    }
    
    return ans
};
*/

// ANSWER
function numSpecial(mat: number[][]): number {
  const m = mat.length,
    n = mat[0].length
  const col = new Array(n).fill(0),
    row = new Array(m).fill(0)
  let ans = 0

  for (let i = 0; i < m; ++i) {
    for (let j = 0; j < n; ++j) {
      if (mat[i][j] === 1) {
        ++col[j]
        ++row[i]
      }
    }
  }

  for (let i = 0; i < m; ++i) {
    for (let j = 0; j < n; ++j) {
      mat[i][j] === 1 && row[i] === 1 && col[j] === 1 && ++ans
    }
  }

  return ans
}
