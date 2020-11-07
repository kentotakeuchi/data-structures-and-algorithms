// https://leetcode.com/problems/spiral-matrix-ii/

/**
 * @param {number} n
 * @return {number[][]}
 */

// MINE
// https://stackoverflow.com/questions/9979560/javascript-multidimensional-array-updating-specific-element
// don't use Array.fill to create multi-dimensional arrays!
// const generateMatrix = (n) => {
// //  const results = Array(n).fill([0, 0, 0]);
//     const results = new Array();
//     // for (let i=0; i<n; i++) results[i] = new Array(n).fill(0);
//     for (let i=0; i<n; i++) results.push([]);
//     console.log({results})

//     let rowTop = 0;
//     let rowBottom = n-1;
//     let colLeft = 0;
//     let colRight = n-1;

//     let count = 1;

//     while(rowTop <= rowBottom && colLeft <= colRight) {
//         debugger
//         for(let i=colLeft; i<=colRight; i++) {
//             results[rowTop][i] = count;
//             count++;
//         }
//         rowTop++;
//         console.log({results})

//         for(let i=rowTop; i<=rowBottom; i++) {
//             results[i][colRight] = count;
//             count++;
//         }
//         colRight--;
//         console.log({results})

//         for(let i=colRight; i>=colLeft; i--) {
//             results[rowBottom][i] = count;
//             count++;
//         }
//         rowBottom--;
//         console.log({results})

//         for(let i=rowBottom; i>=rowTop; i--) {
//             results[i][colLeft] = count;
//             count++;
//         }
//         colLeft++;
//         console.log({results})
//     }

//     return results;
// };

// ANSWER
// When traversing the matrix in the spiral order, at any time we follow one out of the following four directions:
// RIGHT DOWN LEFT UP. Suppose we are working on a 5 x 3 matrix as such:
// 0  1  2  3  4  5
//    6  7  8  9 10
//   11 12 13 14 15
//
// Imagine a cursor starts off at (0, -1), i.e. the position at '0', then we can achieve the spiral order by doing
// the following:
// 1. Go right 5 times
// 2. Go down 2 times
// 3. Go left 4 times
// 4. Go up 1 times.
// 5. Go right 3 times
// 6. Go down 0 times -> quit

const generateMatrix = (n) => {
  const matrix = [...Array(n)].map(() => Array(n).fill(null));
  const dirs = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ]; // right, down, left, up
  const steps = [n, n - 1];

  let num = 1;
  let dir = 0;
  let x = 0;
  let y = -1;

  while (steps[dir % 2] > 0) {
    for (let i = 0; i < steps[dir % 2]; i++) {
      x += dirs[dir][0];
      y += dirs[dir][1];
      matrix[x][y] = num++;
    }

    steps[dir % 2]--;
    dir = (dir + 1) % 4;
  }
  return matrix;
};
