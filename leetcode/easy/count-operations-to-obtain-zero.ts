// https://leetcode.com/problems/count-operations-to-obtain-zero/

// MINE: recursion
/*
function countOperations(n1: number, n2: number, ans: number = 0): number {
    if(!n1 || !n2) return 0
    if(n1 === n2) return ++ans
    else if(n1 > n2) n1 -= n2
    else n2 -= n1
    return countOperations(n1, n2, ++ans)
};
*/

// ANSWER: divmod
function countOperations(n1: number, n2: number): number {
  let ans = 0
  while (Math.min(n1, n2) > 0) {
    if (n1 < n2) [n1, n2] = [n2, n1]
    ans += Math.trunc(n1 / n2)
    n1 %= n2
  }
  return ans
}
