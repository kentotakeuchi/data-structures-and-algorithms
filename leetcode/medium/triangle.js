// https://leetcode.com/problems/triangle/

/**
 * @param {number[][]} triangle
 * @return {number}
 */

// MINE..
// var minimumTotal = function(triangle) {
//     // base case
//     if(triangle.length === 0) return 0;
//     if(triangle.length === 1) return triangle[0][0];

//     let sum = 0;

//     for(let row=0; row<triangle.length; row++) {
//         sum += Math.min(...triangle[row]);
//     }

//     return sum;
// };

// ANSWER
var minimumTotal = function (triangle) {
  for (let i = triangle.length - 2; i >= 0; i--)
    for (let j = 0; j < triangle[i].length; j++)
      triangle[i][j] += Math.min(triangle[i + 1][j], triangle[i + 1][j + 1]);
  return triangle[0][0];
};
