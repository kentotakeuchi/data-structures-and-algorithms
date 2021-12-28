// https://leetcode.com/problems/average-salary-excluding-the-minimum-and-maximum-salary/

// MINE: sort
/*
function average(salary: number[]): number {
    salary.sort((a, z) => a - z)
    return salary.slice(1, salary.length-1).reduce((acc, cur) => acc + cur, 0) / (salary.length-2)
}
*/

// MINE: one pass
function average(salary: number[]): number {
  let min = Infinity,
    max = -Infinity,
    sum = 0

  for (let n of salary) {
    min = Math.min(min, n)
    max = Math.max(max, n)
    sum += n
  }

  return (sum - min - max) / (salary.length - 2)
}

// ANSWER
