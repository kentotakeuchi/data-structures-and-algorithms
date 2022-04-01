// https://leetcode.com/problems/count-square-sum-triples/

// MINE: binary search
function countTriples(n: number): number {
  let ans = 0

  for (let i = n; i > 2; --i) {
    let left = 1,
      right = i - 1

    while (left < right) {
      if (left * left + right * right < i * i) {
        ++left
        continue
      }
      if (left * left + right * right > i * i) {
        --right
        continue
      }
      if (left * left + right * right === i * i) {
        ++ans
        ++left
        --right
      }
    }
  }

  return ans * 2
}

// ANSWER
