// https://leetcode.com/problems/mean-of-array-after-removing-some-elements/

// MINE
/*
function trimMean(arr: number[]): number {
    const x = arr.length * 0.05
    
    arr.sort((a, z) => a - z)
    
    const newArr = arr.slice(x, arr.length-x)
    
    return newArr.reduce((acc, cur) => acc + cur, 0) / newArr.length
};
*/

// ANSWER
function trimMean(arr: number[]): number {
  const n = arr.length
  let sum = 0

  arr.sort((a, z) => a - z)

  for (let i = n / 20; i < n - n / 20; ++i) sum += arr[i]

  return sum / ((n * 9) / 10)
}
