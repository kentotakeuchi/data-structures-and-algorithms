// https://leetcode.com/problems/remove-digit-from-number-to-maximize-result/

// MINE..
/*
function removeDigit(num: string, digit: string): string {
    const A = []
    for(let i=0; i<num.length; ++i) {
        if(num[i] === digit) {
            const digits = num.split('')
            digits.splice(i, 1)
            A.push(parseInt(digits.join('')))
        }
    }
    console.log({A})
    return String(Math.max(...A))
};
*/

// ANSWER
function removeDigit(num: string, digit: string): string {
  for (let i = 0; i < num.length - 1; ++i)
    if (num[i] === digit && num[i] < num[i + 1]) return num.substring(0, i) + num.substring(i + 1)
  for (let i = num.length - 1; i >= 0; --i)
    if (num[i] === digit) return num.substring(0, i) + num.substring(i + 1)
  return ''
}
