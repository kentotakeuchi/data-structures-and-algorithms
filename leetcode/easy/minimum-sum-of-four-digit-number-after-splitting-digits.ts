// https://leetcode.com/problems/minimum-sum-of-four-digit-number-after-splitting-digits/

// MINE
/*
function minimumSum(num: number): number {
    const A = num.toString().split('')
    A.sort((a, z) => parseInt(a) - parseInt(z))
    return parseInt(A[0]+A[2]) + parseInt(A[1]+A[3])
};
*/

// ANSWER: no string conversion
function minimumSum(num: number): number {
  const A = new Array(4).fill(0)
  for (let i = 0; i < 4; ++i) {
    A[i] = num % 10
    num = Math.trunc(num / 10)
  }
  A.sort((a, z) => a - z)
  return A[0] * 10 + A[2] + (A[1] * 10 + A[3])
}
