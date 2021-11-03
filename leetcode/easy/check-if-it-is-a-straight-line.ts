// https://leetcode.com/problems/check-if-it-is-a-straight-line/

// MINE..
/*
function checkStraightLine(coordinates: number[][]): boolean {
    if(coordinates.length === 2) return true
    
    let xDiff
    let yDiff
    if(coordinates[0][0] === 0 && coordinates[0][1] === 0) {
        xDiff = Math.abs(coordinates[2][0] - coordinates[1][0])
        yDiff = Math.abs(coordinates[2][1] - coordinates[1][1])
    } else {
        xDiff = Math.abs(coordinates[1][0] - coordinates[0][0])
        yDiff = Math.abs(coordinates[1][1] - coordinates[0][1])
    }
    
    const slope = Math.floor(yDiff/xDiff)
    
    for(let i=2; i<coordinates.length; ++i) {
        const [x1, y1] = coordinates[i-1]
        const [x2, y2] = coordinates[i]
        if(slope !== Math.floor((y2-y1)/(x2-x1))) return false
    }
    
    return true
};
*/

// ANSWER
function checkStraightLine(coordinates: number[][]): boolean {
  if (coordinates.length === 2) return true

  const [x0, y0] = coordinates[0]
  const [x1, y1] = coordinates[1]
  const xDiff = x1 - x0
  const yDiff = y1 - y0

  for (const [x, y] of coordinates) {
    if (xDiff * (y - y1) !== yDiff * (x - x1)) return false
  }

  return true
}
