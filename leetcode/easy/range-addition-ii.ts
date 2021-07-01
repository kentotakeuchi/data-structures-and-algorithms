// https://leetcode.com/problems/range-addition-ii/

// MINE
/*
function maxCount(m: number, n: number, ops: number[][]): number {
    // base case
    if(!ops.length) return m * n
    
    // init 2d array with 0
    // const arr = Array.from({ length: m }, () => Array.from({ length: n }, () => 0))
    // console.log({arr})
    let minRow = Infinity
    let minCol = Infinity
    
    for(let [row, col] of ops) {
        console.log({row, col})
        minRow = Math.min(minRow, row)
        minCol = Math.min(minCol, col)
        
        // for(let i=0; i<row; ++i) {
        //     for(let j=0; j<col; ++j) {
        //         arr[i][j] = arr[i][j]+1
        //     }
        // }
        
    }
    // console.log({arr})
    
    return minRow * minCol
};
*/

// ANSWER
function maxCount(m: number, n: number, ops: number[][]): number {
  for (let [row, col] of ops) {
    m = Math.min(m, row)
    n = Math.min(n, col)
  }
  return m * n
}
