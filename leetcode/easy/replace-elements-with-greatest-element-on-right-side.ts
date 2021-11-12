// https://leetcode.com/problems/replace-elements-with-greatest-element-on-right-side/

// MINE..
// error TS2554: Expected 2 arguments, but got 1.???
/*
function replaceElements(arr: number[], ans: number[]): number[] {    
    if(arr.length === 1) return [...ans, -1]
    
    ans.push(Math.max(...arr))  
    
    replaceElements(arr, ans)
};
*/

// MINE: too slow
/*
function replaceElements(arr: number[]): number[] {    
    if(arr.length === 1) return [-1]
    
    const ans = []
    
    for(let i=1; i<arr.length-1; ++i) {
        ans.push(Math.max(...arr.slice(i)))
    }
    ans.push(arr[arr.length-1], -1)
    
    return ans
}
*/

// ANSWER: in-place, right to left
function replaceElements(arr: number[]): number[] {
  let max = -1,
    len = arr.length,
    cur

  for (let i = len - 1; i >= 0; --i) {
    cur = arr[i]
    arr[i] = max
    max = Math.max(max, cur)
  }

  return arr
}
