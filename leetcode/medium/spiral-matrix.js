// https://leetcode.com/problems/spiral-matrix/

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */

// MINE
// var spiralOrder = function(matrix) {
//     if (!matrix.length || !matrix[0].length) return [];

//     const results = [];

//     let rowTop = 0;
//     let rowBottom = matrix.length-1;
//     let colLeft = 0;
//     let colRight = matrix[0].length-1;

//     while(rowTop <= rowBottom && colLeft <= colRight) {
//         console.log({rowTop, rowBottom, colLeft, colRight})
//         for(let i=colLeft; i<=colRight; i++) {
//             results.push(matrix[rowTop][i]);
//         }
//         rowTop++;

//         for(let i=rowTop; i<=rowBottom; i++) {
//             results.push(matrix[i][colRight]);
//         }
//         colRight--;

//         if(rowTop <= rowBottom && colLeft <= colRight) {
//             for(let i=colRight; i>=colLeft; i--) {
//                 results.push(matrix[rowBottom][i]);
//             }
//             rowBottom--;

//              for(let i=rowBottom; i>=rowTop; i--) {
//                 results.push(matrix[i][colLeft]);
//             }
//             colLeft++;
//         }
//     }

//     return results;
// };

// ANOTHER SOLUTION: MODIFICATION
var spiralOrder = function (matrix) {
  const res = [];
  while (matrix.length) {
    const first = matrix.shift();
    res.push(...first);
    for (const m of matrix) {
      let val = m.pop();
      if (val) res.push(val);
      m.reverse();
    }
    matrix.reverse();
  }
  return res;
};
