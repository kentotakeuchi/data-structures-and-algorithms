// https://leetcode.com/problems/matrix-diagonal-sum/

// MINE
/*
function diagonalSum(mat: number[][]): number {
    // even - no dup, odd - dup(1)
    if(mat.length === 1) return mat[0][0]
        
    let mid, center
    if(mat.length & 1) {
        mid = Math.floor(mat.length / 2)
        center = mat[mid][mid]
    }
        
    return mid ? countDiagonal(mat) - center : countDiagonal(mat)
        
        
    function countDiagonal(A: number[][]): number {
        let sum = 0
        
        for(let i=0; i<mat.length; ++i) sum += A[i][i]
        
        for(let i=0, j=mat.length-1; j>=0; ++i, --j) sum += A[i][j]
        
        return sum
    }
};
*/

// ANSWER
function diagonalSum(mat: number[][]): number {
  let res = 0
  const n = mat.length
  for (let i = 0; i < n; i++) {
    res += mat[i][i] // Primary diagonals are row = column!
    res += mat[n - 1 - i][i] // Secondary diagonals are row + column = n-1!
  }
  return n % 2 == 0 ? res : res - mat[Math.floor(n / 2)][Math.floor(n / 2)] // if n is a odd number, that mean we have added the center element twice!
}
