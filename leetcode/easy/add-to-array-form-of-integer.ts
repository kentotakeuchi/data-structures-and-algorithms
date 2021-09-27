// https://leetcode.com/problems/add-to-array-form-of-integer/

// MINE: bigint
/*
function addToArrayForm(num: number[], k: number): number[] {
    const result = []
    const sum = BigInt(num.join('')) + BigInt(k)
    for(const str of sum.toString()) {
        result.push(parseInt(str))
    }
    return result
};
*/

// ANSWER: take k as a key
function addToArrayForm(A: number[], K: number): number[] {
  let flag = A.length - 1
  while (K) {
    if (flag < 0) {
      A.unshift(K % 10)
    } else {
      K += A[flag]
      A[flag--] = K % 10
    }
    K = Math.floor(K / 10)
  }
  return A
}
