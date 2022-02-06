// https://leetcode.com/problems/richest-customer-wealth/

// MINE
function maximumWealth(accounts: number[][]): number {
  let max = 0

  for (let arr of accounts) {
    max = Math.max(
      max,
      arr.reduce((acc, cur) => acc + cur, 0)
    )
  }

  return max
}

// ANSWER
