// https://leetcode.com/problems/matrix-cells-in-distance-order/

// MINE..
/*
function allCellsDistOrder(rows: number, cols: number, rCenter: number, cCenter: number): number[][] {

};
*/

// ANSWER
/*
function allCellsDistOrder(r: number, c: number, r0: number, c0: number): number[][] {
  const buckets = [];
  const ret = [];
  for (let i = 0; i < r; ++i) {
    for (let j = 0; j < c; ++j) {
      const dis = Math.abs(i - r0) + Math.abs(j - c0);
      if (buckets[dis] === undefined) buckets[dis] = [];
      buckets[dis].push([i, j]);
    }
  }
  for (const bucket of buckets) {
    ret.push(...bucket);
  }
  return ret;
};
*/

// ANSWER:
/**
The second solution is based on BFS. Here's the algorithm:

Traversal the whole matrix from the (r0, c0) cell with a queue by BFS.
Do some validation for each cell and you will get the answer.
*/
function allCellsDistOrder(r: number, c: number, r0: number, c0: number): number[][] {
  const visited = new Set()
  const ret = []
  const queue = [[r0, c0]]
  while (queue.length) {
    const [x, y] = queue.shift()!
    if (x > r - 1 || x < 0 || y > c - 1 || y < 0 || visited.has(x * 100 + y)) continue
    ret.push([x, y])
    visited.add(x * 100 + y)
    ;[
      [0, -1],
      [0, 1],
      [1, 0],
      [-1, 0]
    ].forEach(move => {
      queue.push([x + move[0], y + move[1]])
    })
  }
  return ret
}
