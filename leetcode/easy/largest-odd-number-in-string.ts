// https://leetcode.com/problems/largest-odd-number-in-string/

// MINE
function largestOddNumber(num: string): string {
  for (let i = num.length - 1; i >= 0; --i) {
    if (+num[i] % 2 === 1) return num.substring(0, i + 1)
  }
  return ''
}

// ANSWER
