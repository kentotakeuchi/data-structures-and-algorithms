// https://leetcode.com/problems/largest-3-same-digit-number-in-string/

// MINE
function largestGoodInteger(num: string): string {
  let ans = ''
  for (let i = 0; i < num.length - 2; ++i) {
    if (num[i] === num[i + 1] && num[i + 1] === num[i + 2]) {
      if (num[i] > ans) ans = num[i]
    }
  }
  return ans.repeat(3)
}

// ANSWER
