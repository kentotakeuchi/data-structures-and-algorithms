// https://leetcode.com/problems/split-a-string-in-balanced-strings/

// MINE
function balancedStringSplit(s: string): number {
  let ans = 0
  let balance = 0

  for (const char of s) {
    char === 'L' ? ++balance : --balance
    balance === 0 && ++ans
  }

  return ans
}

// ANSWER
