// https://leetcode.com/problems/find-greatest-common-divisor-of-array/

// MINE
/*
function findGCD(nums: number[]): number {
    let min = 1000, max = 1
    for(let n of nums) {
        if(n > max) max = n
        if(n < min) min = n
    }
    console.log({max, min})
    for(let i=min; i>=2; --i) {
        if(max%i === 0 && min%i === 0) return i
    }
    return 1
};
*/

// ANSWER: Euclidean algorithm
function findGCD(nums: number[]): number {
  let min = 1000,
    max = 1

  for (let e of nums) {
    min = Math.min(e, min)
    max = Math.max(e, max)
  }

  while (min > 0) {
    let temp = min
    min = max % min
    max = temp
  }
  return max
}
