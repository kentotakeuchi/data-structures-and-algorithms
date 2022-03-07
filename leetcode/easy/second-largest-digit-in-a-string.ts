// https://leetcode.com/problems/second-largest-digit-in-a-string/

// MINE
function secondHighest(s: string): number {
  let first = -1,
    second = -1
  for (let char of s) {
    const d = parseInt(char)
    if (d !== NaN) {
      if (d > first) {
        second = first
        first = d
      } else if (second < d && d < first) {
        second = d
      }
    }
  }
  return second
}

// ANSWER
