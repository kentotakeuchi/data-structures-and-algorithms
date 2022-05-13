// https://leetcode.com/problems/check-if-every-row-and-column-contains-all-numbers/

// MINE
/*
function checkValid(matrix: number[][]): boolean {
    const n = matrix.length
    for(let row=0; row<n; ++row) if(new Set(matrix[row]).size !== n) return false
    for(let col=0; col<n; ++col) {
        const set = new Set()
        for(let row=0; row<n; ++row) set.add(matrix[row][col])
        if(set.size !== n) return false
    }
    return true
};
*/

// ANSWER: one loop
function checkValid(mx: number[][]): boolean {
  const n = mx.length
  for (let r = 0; r < n; ++r) {
    const rs = new Set()
    const cs = new Set()
    for (let c = 0; c < n; ++c) {
      if (rs.has(mx[r][c]) || cs.has(mx[c][r])) return false
      rs.add(mx[r][c]), cs.add(mx[c][r])
    }
  }
  return true
}
