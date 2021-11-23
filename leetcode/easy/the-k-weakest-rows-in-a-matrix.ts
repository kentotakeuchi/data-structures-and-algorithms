// https://leetcode.com/problems/the-k-weakest-rows-in-a-matrix/

// MINE
/*
function kWeakestRows(mat: number[][], k: number): number[] {
    const map = new Map()
    
    for(let row=0; row<mat.length; ++row) {
        map.set(row, 0)
        
        for(let col=0; col<mat[0].length; ++col) {
            if(mat[row][col] === 0) break
            map.set(row, map.get(row)+1)
        }
    }
    
    const arr = Array.from(map, ([key, val]) => ({key, val}))
    arr.sort(({key: k1, val: v1}, {key: k2, val: v2}) => v1 - v2)
    const ans = arr.map(({key, val}) => key)
    return ans.slice(0, k)
};
*/

// ANSWER: count & sort
/*
function kWeakestRows(mat: number[][], k: number): number[] {
    const m = mat.length;
    const n = mat[0].length;
    const ret = [];
      for (let i = 0; i < m; ++i) {
        let cur = 0;
        for (let j = 0; j < n; ++j, ++cur) {
          if (mat[i][j] === 0) break;
        }
        ret.push([cur, i]);
      }
      return ret
        .sort((a, b) => a[0] === b[0] ? a[1] - b[1] : a[0] - b[0])
        .slice(0, k)
        .map(item => item[1]);
}
*/

// ANSWER: binary search
function kWeakestRows(mat: number[][], k: number): Uint8Array {
  const m = mat.length;
  const n = mat[0].length;
  const rows = [];
  const ret = new Uint8Array(k);

  for (let i = 0; i < m; ++i) {
    rows.push([search(mat[i], 0, n), i]);
  }
  rows.sort((a, b) => a[0] === b[0] ? a[1] - b[1] : a[0] - b[0]);
  for (let i = 0; i < k; ++i) {
    ret[i] = rows[i][1];
  }
  return ret;

  function search(arr: number[], left: number, right: number): number {
    if (left === right) return left;
    const mid = Math.floor((left + right) / 2);
    return arr[mid] === 0 ? search(arr, left, mid) : search(arr, mid + 1, right);
  }
};
