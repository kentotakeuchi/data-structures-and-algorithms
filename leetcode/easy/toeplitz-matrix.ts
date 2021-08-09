// https://leetcode.com/problems/toeplitz-matrix/

// MINE..
/*
function isToeplitzMatrix(matrix: number[][]): boolean {
    const rowLen = matrix.length // 3
    const colLen = matrix[0].length // 4
    
    for(let row=0; row<rowLen-1; ++row) {
        if(row === 0) {
            for(let col=1, r=1; col<colLen-1; ++col, ++r) {
                if(matrix[row][col-1] !== matrix[r][col]) return false
            }
        } else {
            for(let r=1, c=1; r<rowLen; ++r, ++c) {
                if(matrix[r-1][col-1] !== matrix[r][col]) return false
            }
        }
    }
    
    return true
};
*/

// ANSWER: hash map
/*
function isToeplitzMatrix(matrix: number[][]): boolean {
    const map = new Map()
    for(let r=0; r<matrix.length; ++r) {
        for(let c=0; c<matrix[0].length; ++c) {
            if(!map.has(r-c)) {
                map.set(r-c, matrix[r][c])
            } else if(map.get(r-c) !== matrix[r][c]) {
                return false
            }
        }
    }
    return true
}
*/

// ANSWER:
function isToeplitzMatrix(matrix: number[][]): boolean {
  for (let r = 0; r < matrix.length; ++r) {
    for (let c = 0; c < matrix[0].length; ++c) {
      if (r > 0 && c > 0 && matrix[r - 1][c - 1] !== matrix[r][c]) {
        return false
      }
    }
  }
  return true
}
