// https://leetcode.com/problems/maximum-units-on-a-truck/

// MINE..
/*
function maximumUnits(boxTypes: number[][], truckSize: number): number {
    const A = boxTypes.map(arr => arr[0] * arr[1]).sort((a, z) => z - a)
    console.log({A})
    
    return A.reduce((acc, cur) => {
        if(truckSize === 0) return
        return acc + cur
    }, 0)
};
*/

// ANSWER
function maximumUnits(B: number[][], T: number): number {
  B.sort((a, b) => b[1] - a[1])
  let ans = 0
  for (let i = 0; T && i < B.length; i++) {
    let count = Math.min(B[i][0], T)
    ;(ans += count * B[i][1]), (T -= count)
  }
  return ans
}
