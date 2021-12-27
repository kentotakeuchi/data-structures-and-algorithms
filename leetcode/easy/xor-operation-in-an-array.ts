// https://leetcode.com/problems/xor-operation-in-an-array/

// MINE
/*
function xorOperation(n: number, start: number): number {
    const arr = [start]
    
    for(let i=1; i<n; ++i) {
        arr.push(arr[i-1] + 2)
    }
    
    return arr.reduce((acc, cur) => acc ^ cur, 0)
};
*/

// ANSWER
function xorOperation(n: number, start: number): number {
  let result = start

  for (let i = 1; i < n; i++) {
    result ^= start + i * 2
  }

  return result
}
