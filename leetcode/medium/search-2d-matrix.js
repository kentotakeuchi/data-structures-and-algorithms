// https://leetcode.com/problems/search-a-2d-matrix/

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */

// MINE..
// var searchMatrix = function(matrix, target) {
//     debugger
//     const r = matrix.length
//     const c = matrix[0]?.length

//     let targetArr
//     for(let i=0; i<r; i++) {
//         if(matrix[i][0] <= target && target <= matrix[i][c-1]) {
//             targetArr = matrix[i]
//             break
//         }
//     }
//     if(!targetArr) return false;

//     let left = targetArr[0]
//     let right = targetArr[targetArr.length-1]
//     let slicedArr = targetArr
//     for(let i=0; i<targetArr.length; i++) {
//         let mid = Math.floor(slicedArr.length / 2)
//         if(slicedArr[mid] === target) {
//             return true
//         } else if(slicedArr[mid] > target) {
//             slicedArr = slicedArr.slice(0, mid)
//         } else {
//             slicedArr = slicedArr.slice(mid, slicedArr.length-1)
//         }
//     }

//     return false
// };

// ANSWER
function searchMatrix(matrix, target) {
  if (!matrix.length || !matrix[0].length) return false;

  let row = 0;
  let col = matrix[0].length - 1;

  while (col >= 0 && row <= matrix.length - 1) {
    if (matrix[row][col] === target) return true;
    else if (matrix[row][col] > target) col--;
    else if (matrix[row][col] < target) row++;
  }

  return false;
}
