// https://leetcode.com/problems/number-of-rectangles-that-can-form-the-largest-square/

// MINE
/*
function countGoodRectangles(rectangles: number[][]): number {
    let max = 0
    const arr = []
    
    for(let [l, w] of rectangles) {
        max = Math.max(max, Math.min(l, w))
        arr.push(Math.min(l, w))
    }
    
    return arr.filter(l => max === l).length
};
*/

// ANSWER
function countGoodRectangles(rectangles: number[][]): number {
  let count = 0,
    max = 0

  for (let [l, w] of rectangles) {
    const side = Math.min(l, w)
    if (side > max) {
      count = 1
      max = side
    } else if (side === max) {
      ++count
    }
  }

  return count
}
