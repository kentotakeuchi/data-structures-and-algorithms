// https://leetcode.com/problems/thousand-separator/

// MINE
function thousandSeparator(n: number): string {
  let s = `${n}`,
    ans = ''

  for (let i = 0; i < s.length; ++i) {
    if (i > 0 && (s.length - i) % 3 === 0) ans += '.'
    ans += s[i]
  }

  return ans
}

// ANSWER
