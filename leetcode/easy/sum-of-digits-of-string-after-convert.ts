// https://leetcode.com/problems/sum-of-digits-of-string-after-convert/

// MINE
function getLucky(s: string, k: number): number {
  // convert
  let str = ''
  for (let char of s) str += `${char.charCodeAt(0) - 96}`

  // transform
  for (let i = 0; i < k; ++i) {
    let temp = 0
    for (let digit of str) temp += parseInt(digit)
    str = `${temp}`
  }

  return parseInt(str)
}

// ANSWER
