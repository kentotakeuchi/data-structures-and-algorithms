// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

// MINE
function matrix(n) {
  // create 2d array
  const results = Array.from(Array(n), () => Array(n).fill(0));

  let count = 1;
  let top = 0;
  let btm = n - 1;
  let left = 0;
  let right = n - 1;

  while (top <= btm && left <= right) {
    // top
    for (let i = left; i <= right; i++) {
      results[top][i] = count;
      ++count;
    }
    ++top;

    // right
    for (let i = top; i <= btm; i++) {
      results[i][right] = count;
      ++count;
    }
    --right;

    // bottom
    for (let i = right; i >= left; i--) {
      results[btm][i] = count;
      ++count;
    }
    --btm;

    // left
    for (let i = btm; i >= top; i--) {
      results[i][left] = count;
      ++count;
    }
    ++left;
  }

  return results;
}

// ANSWER
// function matrix(n) {
//   const results = [];

//   for (let i = 0; i < n; i++) {
//     results.push([]);
//   }

//   let count = 1;
//   let startRow = 0;
//   let endRow = n - 1;
//   let startCol = 0;
//   let endCol = n - 1;
//   while (startRow <= endRow && startCol <= endCol) {
//     // Top row
//     for (let i = startCol; i <= endCol; i++) {
//       results[startRow][i] = count;
//       count++;
//     }
//     startRow++;

//     // Right column
//     for (let i = startRow; i <= endRow; i++) {
//       results[i][endCol] = count;
//       count++;
//     }
//     endCol--;

//     // Bottom row
//     for (let i = endCol; i >= startCol; i--) {
//       results[endRow][i] = count;
//       count++;
//     }
//     endRow--;

//     // Left column
//     for (let i = endRow; i >= startRow; i--) {
//       results[i][startCol] = count;
//       count++;
//     }
//     startCol++;
//     console.log({ results });
//   }

//   return results;
// }

module.exports = matrix;
