// https://leetcode.com/problems/can-make-arithmetic-progression-from-sequence/

// MINE: sort
/*
function canMakeArithmeticProgression(arr: number[]): boolean {
    arr.sort((a, z) => a - z)
    const diff = arr[1] - arr[0]
    
    for(let i=2; i<arr.length; ++i) {
        if(arr[i] - arr[i-1] !== diff) return false
    }
    
    return true
};
*/

// AMSWER: set(On)
function canMakeArithmeticProgression(arr: number[]): boolean {
  const seen = new Set()
  let min = Infinity,
    max = -Infinity,
    n = arr.length

  for (let a of arr) {
    min = Math.min(min, a)
    max = Math.max(max, a)
    seen.add(a)
  }

  let diff = max - min

  if (diff % (n - 1) !== 0) return false

  diff /= n - 1

  while (--n > 0) {
    if (!seen.has(min)) return false
    min += diff
  }

  return true
}
