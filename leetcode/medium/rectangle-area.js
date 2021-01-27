// https://leetcode.com/problems/rectangle-area/

/**
 * @param {number} A
 * @param {number} B
 * @param {number} C
 * @param {number} D
 * @param {number} E
 * @param {number} F
 * @param {number} G
 * @param {number} H
 * @return {number}
 */

// MINE
// var computeArea = function(A, B, C, D, E, F, G, H) {
//     const area1 = (Math.abs(A) + Math.abs(C)) * (Math.abs(B) + Math.abs(D))
//     const area2 = (Math.abs(E) + Math.abs(G)) * (Math.abs(F) + Math.abs(H))
//     const dup = (Math.abs(E) + Math.abs(C)) * (Math.abs(B) + Math.abs(H))
//     console.log({area1, area2, dup})
//     return area1 + area2 - dup
// };

// ANSWER
var computeArea = function (A, B, C, D, E, F, G, H) {
  var intersectionWidth = Math.min(C, G) - Math.max(A, E);
  var intersectionHeight = Math.min(D, H) - Math.max(B, F);
  intersectionWidth = intersectionWidth > 0 ? intersectionWidth : 0;
  intersectionHeight = intersectionHeight > 0 ? intersectionHeight : 0;
  return (
    (C - A) * (D - B) +
    (G - E) * (H - F) -
    intersectionWidth * intersectionHeight
  );
};
