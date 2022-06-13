// https://leetcode.com/problems/find-the-k-beauty-of-a-number/

// MINE
function divisorSubstrings(num: number, k: number): number {
  const str = String(num)
  let ans = 0
  for (let i = 0; i <= str.length - k; ++i) {
    if (num % parseInt(str.substring(i, i + k)) === 0) ++ans
  }
  return ans
}

// ANSWER
