// https://leetcode.com/problems/check-if-number-has-equal-digit-count-and-digit-value/

// MINE
/*
function digitCount(num: string): boolean {
  const map = new Map()
  for (let d of num) map.set(parseInt(d), map.get(parseInt(d)) + 1 || 1)
  for (let i = 0; i < num.length; ++i) {
    if(!map.has(i) && num[i] === '0') continue
    if(parseInt(num[i]) !== map.get(i)) return false
  }
  return true
}
*/

// ANSWER
function digitCount(num: string): boolean {
  const counts = new Array(11).fill(0)
  for (let n of num) ++counts[n]
  for (let i = 0; i < num.length; ++i) if (parseInt(num[i]) !== counts[i]) return false
  return true
}
