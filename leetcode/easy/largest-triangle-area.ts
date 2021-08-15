// https://leetcode.com/problems/largest-triangle-area/

// MINE..
/*
function largestTriangleArea(points: number[][]): number {
    let maxX = 0
    let maxY = 0
    
    for(let i=0; i<points.length; ++i) {
        maxX = Math.max(maxX, points[i][0])
        maxY = Math.max(maxY, points[i][1])
    }
    
    return maxX * maxY / 2
};
*/

// ANSWER
function largestTriangleArea(points: number[][]): number {
  const n = points.length
  let maxArea = 0

  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      for (let k = j + 1; k < n; k++) {
        const area = calcArea(points[i], points[j], points[k])
        maxArea = Math.max(maxArea, area)
      }
    }
  }

  return maxArea
}

function calcArea(coordA: number[], coordB: number[], coordC: number[]): number {
  const [xCoordA, yCoordA] = coordA
  const [xCoordB, yCoordB] = coordB
  const [xCoordC, yCoordC] = coordC

  const sideA = xCoordA * (yCoordB - yCoordC)
  const sideB = xCoordB * (yCoordC - yCoordA)
  const sideC = xCoordC * (yCoordA - yCoordB)

  return Math.abs((sideA + sideB + sideC) / 2)
}
