// https://leetcode.com/problems/plus-one/

// MINE..
/*
function plusOne(digits: number[]): number[] {
    let end = digits.length - 1
    while(end >= 0) {
        ++digits[end]
        if(digits[end] > 9) {
            let last = digits.pop()
            const lastArr = last.toString().split('').map(num => parseInt(num))
            digits.push(...lastArr)
        } else {
            return digits
        }
    }
    return digits
};
*/

// ANSWER
var plusOne = function (digits) {
  for (var i = digits.length - 1; i >= 0; i--) {
    digits[i]++
    if (digits[i] > 9) {
      digits[i] = 0
    } else {
      return digits
    }
  }
  digits.unshift(1)
  return digits
}
