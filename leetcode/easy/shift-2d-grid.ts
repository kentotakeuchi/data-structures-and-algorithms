// https://leetcode.com/problems/shift-2d-grid/

// MINE..
/*
function shiftGrid(grid: number[][], k: number): number[][] {
    const ans = []
    const cLen = grid[0].length
    const mergedArr = grid.reduce((acc, cur) => [...acc, ...cur])
    
    mergedArr.unshift(...mergedArr.splice(mergedArr.length-k, k))
    
    for(let i=cLen; i<=mergedArr.length; i+=cLen) ans.push(mergedArr.slice(i-cLen, i))
    
    return ans
};
*/

// ANSWER
function shiftGrid(grid: number[][], k: number): number[][] {
  var arr = grid.flat(),
    len = grid[0].length,
    res = []

  while (k--) {
    arr.unshift(arr.pop()!)
  }

  while (arr.length) {
    res.push(arr.splice(0, len))
  }

  return res
}
