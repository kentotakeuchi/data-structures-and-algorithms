// https://www.rallycoding.com/problems/208
// https://dev.to/alisabaj/solving-pascal-s-triangle-in-javascript-4e59

function solve(numRows) {
  // base case
  if (numRows === 0) return []
  if (numRows === 1) return [[1]]

  // returned in the end
  let result = []

  // outer loop
  for (let row = 1; row <= numRows; row++) {
    // inner array
    let arr = []

    // inner loop
    for (let col = 0; col < row; col++) {
      // if index is 0 or last
      if (col === 0 || col === row - 1) {
        arr.push(1)
      }
      // else --> sum of col-1 + col in the above row
      else {
        arr.push(result[row - 2][col - 1] + result[row - 2][col])
      }
    }

    result.push(arr)
  }

  return result
}
