// https://leetcode.com/problems/maximum-number-of-balls-in-a-box/

// MINE..
/*
function countBalls(lowLimit: number, highLimit: number): number {
    let n = highLimit - lowLimit + 1
};
*/

// ANSWER
function countBalls(lowLimit: number, highLimit: number): number {
  const map = new Map()
  let ans = 0

  for (let i = lowLimit; i <= highLimit; ++i) {
    const sum = digitSum(i)
    map.set(sum, map.get(sum) + 1 || 1)
    ans = Math.max(ans, map.get(sum))
  }

  return ans
}

function digitSum(num: number): number {
  let sum = 0
  while (num !== 0) {
    sum += num % 10
    num = Math.trunc(num / 10)
  }
  return sum
}
