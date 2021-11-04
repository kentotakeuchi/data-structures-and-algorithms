// https://leetcode.com/problems/cells-with-odd-values-in-a-matrix/

// MINE
/*
function oddCells(m: number, n: number, indices: number[][]): number {
    let odd = 0
    const matrix = new Array(m).fill(0).map(el => new Array(n).fill(0))
    
    for(const [r, c] of indices) {
        for(let i=0; i<matrix[r].length; ++i) ++matrix[r][i]
        for(let i=0; i<matrix.length; ++i) ++matrix[i][c]
    }
    
    for(const arr of matrix) {
        for(const n of arr) n % 2 !== 0 && ++odd
    }
    
    return odd
};
*/

// ANSWER
function oddCells(n: number, m: number, indices: number[][]): number {
  const nn = Array(n).fill(false)
  const mm = Array(m).fill(false)
  indices.forEach(([x, y]) => {
    nn[x] = !nn[x]
    mm[y] = !mm[y]
  })
  const numR = nn.reduce((acc, cur) => (cur ? acc + 1 : acc), 0)
  const numC = mm.reduce((acc, cur) => (cur ? acc + 1 : acc), 0)
  return numR * m + numC * n - 2 * numR * numC
}
