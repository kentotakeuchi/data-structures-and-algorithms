// https://leetcode.com/problems/largest-number-after-digit-swaps-by-parity/

// MINE
function largestInteger(num: number): number {
  const nums = String(num).split(''),
    odds = [],
    evens = [],
    ans = []
  for (let n of nums) n % 2 === 0 ? evens.push(parseInt(n)) : odds.push(parseInt(n))
  odds.sort((a, z) => a - z)
  evens.sort((a, z) => a - z)
  for (let n of nums) n % 2 === 0 ? ans.push(evens.pop()) : ans.push(odds.pop())
  return ans.join('')
}

// ANSWER
