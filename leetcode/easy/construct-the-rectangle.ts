// https://leetcode.com/problems/construct-the-rectangle/

// MINE..
/*
function constructRectangle(area: number): number[] {

};
*/

// ANSWER
function constructRectangle(area: number): number[] {
  let w = Math.floor(Math.sqrt(area))

  while (!Number.isInteger(area / w)) w--

  return [area / w, w]
}
