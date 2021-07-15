// https://leetcode.com/problems/image-smoother/

// MINE..
/*
function imageSmoother(img: number[][]): number[][] {

};
*/

// ANSWER
function imageSmoother(M: number[][]): number[][] {
  const result = new Array(M.length).fill(0).map(_ => new Array(M[0].length).fill(0))

  for (let i = 0; i < M.length; i++) {
    for (let j = 0; j < M[0].length; j++) {
      const neighbours = getNeighbours(i, j, M)
      result[i][j] = getCount([...neighbours, [i, j]], M)
    }
  }
  return result
}

function getNeighbours(i: number, j: number, M: number[][]) {
  const directions = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
    [1, 1],
    [1, -1],
    [-1, 1],
    [-1, -1]
  ]

  return directions.map(d => [i + d[0], j + d[1]]).filter(([i, j]) => isValidRange(i, j, M))
}

function isValidRange(i: number, j: number, M: number[][]) {
  return i >= 0 && i < M.length && j >= 0 && j < M[0].length
}

function getCount(cells: number[][], M: number[][]) {
  const count = cells.reduce((sum, [i, j]: any) => (sum += M[i][j]), 0)
  return Math.floor(count / cells.length)
}
