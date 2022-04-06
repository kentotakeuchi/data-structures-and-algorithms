// https://leetcode.com/problems/three-divisors/

// MINE
/*
function isThree(n: number): boolean {
    let ans = 0
    for(let i=1; i<=n; ++i) {
        if(n%i === 0) ++ans
    }
    return ans === 3
};
*/

// ANSWER
/*
function isThree(n: number): boolean {
    let count = 2
    for(let i=2; i<n && count<=3; ++i) {
        if(n%i === 0) ++count
    }
    return count === 3
}
*/

// ANSWER
function isThree(n: number): boolean {
  if (n < 4) return false
  const root = Math.floor(Math.sqrt(n))
  if (root * root < n) return false
  for (let i = 2; i <= Math.sqrt(root); i++) {
    if (root % i == 0) return false
  }
  return true
}
