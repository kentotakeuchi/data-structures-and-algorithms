// https://leetcode.com/problems/calculate-digit-sum-of-a-string/

// MINE
function digitSum(s: string, k: number): string {
  while (s.length > k) {
    const A = []
    for (let i = 0; i < s.length; i += k) {
      A.push(
        s
          .slice(i, Math.min(i + k, s.length))
          .split('')
          .reduce((acc, cur) => acc + parseInt(cur), 0)
      )
    }
    s = A.join('')
  }
  return s
}

// ANSWER
