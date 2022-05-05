// https://leetcode.com/problems/finding-3-digit-even-numbers/

// MINE
function findEvenNumbers(digits: number[]): number[] {
  const freq = new Array(10).fill(0),
    ans = []
  for (let d of digits) freq[d] += 1
  for (let i = 100; i <= 998; i += 2) {
    const copy = [...freq]
    let valid = true
    for (let s of i.toString()) {
      let d = parseInt(s)
      if (--copy[d] < 0) valid = false
    }
    if (valid) ans.push(i)
  }
  return ans
}

// ANSWER
