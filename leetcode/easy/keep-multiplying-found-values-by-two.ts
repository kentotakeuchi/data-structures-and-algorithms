// https://leetcode.com/problems/keep-multiplying-found-values-by-two/

// MINE: recursion
/*
function findFinalValue(nums: number[], o: number): number {
    if(!nums.includes(o)) return o
    return findFinalValue(nums, 2*o)
};
*/

// ANSWER: array
function findFinalValue(nums: number[], o: number): number {
  const A = new Array(1001).fill(0)
  for (let n of nums) ++A[n]
  while (o < 1001 && A[o]) o *= 2
  return o
}
