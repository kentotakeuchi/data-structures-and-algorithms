// https://leetcode.com/problems/count-integers-with-even-digit-sum/

// MINE
function countEven(n: number): number {
  const N = n
  let sum = 0
  while (n > 0) {
    sum += n % 10
    n = Math.trunc(n / 10)
  }
  return sum % 2 === 0 ? Math.trunc(N / 2) : Math.trunc((N - 1) / 2)
}

// ANSWER
