// https://leetcode.com/problems/lucky-numbers-in-a-matrix/

// MINE
function luckyNumbers(matrix: number[][]): number[] {
  const minRow: number[] = []
  const maxCol: number[] = []

  for (let arr of matrix) minRow.push(Math.min(...arr))
  for (let col = 0; col < matrix[0].length; ++col) {
    let max = -Infinity
    for (let row = 0; row < matrix.length; ++row) {
      max = Math.max(max, matrix[row][col])
    }
    maxCol.push(max)
  }

  return minRow.filter(n => maxCol.includes(n))
}

// ANSWER
