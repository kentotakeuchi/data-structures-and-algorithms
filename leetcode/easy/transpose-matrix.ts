// https://leetcode.com/problems/transpose-matrix/

// MINE
/*
function transpose(matrix: number[][]): number[][] {
    const results = Array(matrix[0].length).fill(0).map(() => Array(matrix.length))
    console.log({results})
    
    for(let col = 0; col < matrix[0].length; ++col) {
        for(let row = 0; row < matrix.length; ++row) {
            results[col][row] = matrix[row][col]
        }
    }
    
    return results
};
*/

// ANSWER: map func
function transpose(A: number[][]): number[][] {
  return A[0].map((_, i) => A.map(b => b[i]))
}
