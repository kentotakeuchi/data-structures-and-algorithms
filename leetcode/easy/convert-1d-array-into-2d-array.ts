// https://leetcode.com/problems/convert-1d-array-into-2d-array/

// MINE
/*
function construct2DArray(ori: number[], m: number, n: number): number[][] {
    const ans = []
    let i = 0
    for(let row=0; row<m; ++row) {
        const arr = []
        for(let col=0; col<n; ++col) {
            if(!ori[i+col]) return []
            arr.push(ori[i+col])
        }
        ans.push(arr)
        i += n
    }
    if(i < ori.length) return []
    return ans
};
*/

// ANSWER: O(n)
function construct2DArray(ori: number[], m: number, n: number): number[][] {
  if (ori.length !== m * n) return []
  const ans = new Array(m).fill(0).map(_ => new Array(n))
  for (let i = 0; i < ori.length; ++i) ans[Math.floor(i / n)][i % n] = ori[i]
  return ans
}
