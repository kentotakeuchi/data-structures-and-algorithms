// https://leetcode.com/problems/factorial-trailing-zeroes/

// MINE: O(n) --> not work if n is big..
/*
function trailingZeroes(n: number): number {
    if(n === 0) return 0
    
    let result = 0
    let sum = n
    
    while(1 < n) {
        --n
        sum *= n
    }
    console.log({n, sum})
    
    while(sum % 10 === 0) {
        sum /= 10
        ++result
    }
    
    return result
};
*/

// ANSWER
// https://leetcode.com/problems/factorial-trailing-zeroes/discuss/355808/JavaScript-solution-with-explanation
var trailingZeroes = function (n: number): number {
  let numZeroes = 0
  for (let i = 5; i <= n; i *= 5) {
    numZeroes += Math.floor(n / i)
  }
  return numZeroes
}
