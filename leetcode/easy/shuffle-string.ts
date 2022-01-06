// https://leetcode.com/problems/shuffle-string/

// MINE: naive
function restoreString(s: string, indices: number[]): string {
  let ans = []

  for (let i = 0; i < s.length; ++i) {
    ans[indices[i]] = s[i]
  }

  return ans.join('')
}

// ANSWER
