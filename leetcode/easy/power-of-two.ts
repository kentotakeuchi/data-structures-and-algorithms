// https://leetcode.com/problems/power-of-two/

// MINE..
/*
function isPowerOfTwo(n: number): boolean {

};
*/

// ANSWER: bitwise operator "&"
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_AND
/*
let isPowerOfTwo = (n: number): boolean => n > 0 ? !(n & n-1) : false;
*/

// ANSWER..: math.log --> not working due to floating-point rounding
/*
function isPowerOfTwo(n: number): boolean {
    return getBaseLog(2, n) % 1 === 0
}


// return "exponents"
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/log
function getBaseLog(num: number, power: number): number {
  return Math.log(power) / Math.log(num);
}
*/

// ANSWER
/*
var isPowerOfTwo = (n: number): boolean => 0 < n && (2 ** 52) % n === 0
*/

// ANSWER: recursive(not meet the requirement tho)
var isPowerOfTwo = function (n: number): boolean {
  if (n === 1) {
    return true
  } else if (n <= 0) {
    return false
  }

  if (n % 2 !== 0) {
    return false
  } else {
    return isPowerOfTwo(Math.floor(n / 2))
  }
}
