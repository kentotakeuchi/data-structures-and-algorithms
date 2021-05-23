// https://leetcode.com/problems/add-strings/

// MINE..
/*
function addStrings(num1: string, num2: string): string {
    // base case
    if(num1 === '0' || num2 === '0') return num1 === '0' ? num2 : num1
    
    
};
*/

// ANSWER
function addStrings(num1: string, num2: string): string {
  let i = num1.length - 1
  let j = num2.length - 1
  let carry = 0
  let sum = ''

  for (; i >= 0 || j >= 0 || carry > 0; i--, j--) {
    const digit1 = i < 0 ? 0 : Number(num1.charAt(i))
    const digit2 = j < 0 ? 0 : Number(num2.charAt(j))
    const digitsSum = digit1 + digit2 + carry
    sum = `${digitsSum % 10}${sum}`
    carry = Math.floor(digitsSum / 10)
  }

  return sum
}
