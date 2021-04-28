// https://leetcode.com/problems/ugly-number/

// MINE..
/*
const isPrime = num => {
    for (let i = 2, s = Math.sqrt(num); i <= s; ++i) {
    if (num % i === 0) return false
    }
    return 1 < num
}
 
function isUgly(n: number): boolean {
    // base case
    if(n <= 1) return true
    
    
};
*/

// ANSWER
var isUgly = function (num: number): boolean {
  if (num <= 0) return false
  while (num % 2 == 0) num /= 2
  while (num % 3 == 0) num /= 3
  while (num % 5 == 0) num /= 5
  return num == 1
}
