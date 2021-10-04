// https://leetcode.com/problems/partition-array-into-three-parts-with-equal-sum/

// MINE..
/*
function canThreePartsEqualSum(arr: number[]): boolean {

};
*/

// ANSWER
function canThreePartsEqualSum(A: number[]): boolean {
  const totalSum = A.reduce((acc, cur) => acc + cur, 0)
  const average = totalSum / 3
  let sum = 0,
    count = 0

  for (let i = 0; i < A.length; i++) {
    sum += A[i]
    if (sum === average) {
      count++
      sum = 0
    }
  }
  return count >= 3
}
