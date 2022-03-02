// https://leetcode.com/problems/find-nearest-point-that-has-the-same-x-or-y-coordinate/

// MINE
/*
function nearestValidPoint(x: number, y: number, points: number[][]): number {
    if(points.length === 1) {
        if(points[0][0] === x && points[0][1] === y) return 0
        return -1
    }
    let min = 10000, ans
    for(let i=0; i<points.length; ++i) {
        const [a, b] = points[i]
        const distance = Math.abs(x-a) + Math.abs(y-b)
        if(min > distance) {
            min = distance
            ans = i
        }
    }
    return ans
};
*/

// ANSWER
function nearestValidPoint(x: number, y: number, points: number[][]): number {
  let index = -1
  for (let i = 0, min = 10000; i < points.length; ++i) {
    const [a, b] = points[i]
    const dx = x - a,
      dy = y - b
    if (dx * dy === 0 && Math.abs(dx + dy) < min) {
      min = Math.abs(dx + dy)
      index = i
    }
  }
  return index
}
