// https://leetcode.com/problems/rectangle-overlap/

// MINE..
/*
function isRectangleOverlap(rec1: number[], rec2: number[]): boolean {
    return Math.abs(rec1[2]) > Math.abs(rec2[0]) && Math.abs(rec1[3]) > Math.abs(rec2[1])
};
*/

// ANSWER: check position
/*
function isRectangleOverlap(rec1: number[], rec2: number[]): boolean {
    // check if either rectangle is actually a line
    if(rec1[0] === rec1[2] || rec1[1] === rec1[3] || rec2[0] === rec2[2] || rec2[1] === rec2[3]) return false
    
    return !(rec1[2] <= rec2[0] || rec1[3] <= rec2[1] || rec1[0] >= rec2[2] || rec1[1] >= rec2[3])
}
*/

// ANSWER: check area
function isRectangleOverlap(rec1: number[], rec2: number[]): boolean {
  return (
    Math.min(rec1[2], rec2[2]) > Math.max(rec1[0], rec2[0]) && // width > 0
    Math.min(rec1[3], rec2[3]) > Math.max(rec1[1], rec2[1])
  ) // height > 0
}
