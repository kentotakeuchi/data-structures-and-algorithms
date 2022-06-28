//
// https://leetcode.com/problems/calculate-amount-paid-in-taxes/

// MINE
function calculateTax(brackets: number[][], income: number): number {
  let ans = 0,
    prev = 0
  for (let [upper, percent] of brackets) {
    if (upper <= income) {
      ans += ((upper - prev) * percent) / 100
      prev = upper
    } else {
      ans += ((income - prev) * percent) / 100
      return ans
    }
  }
  return ans
}

// ANSWER
