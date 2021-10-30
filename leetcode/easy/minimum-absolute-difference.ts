// https://leetcode.com/problems/minimum-absolute-difference/

// MINE
function minimumAbsDifference(arr: number[]): number[][] {
  const ans = []

  // find min diff
  arr.sort((a, z) => a - z)
  let minDiff = Math.abs(arr[1] - arr[0])
  for (let i = 2; i < arr.length; ++i) {
    minDiff = Math.min(minDiff, Math.abs(arr[i] - arr[i - 1]))
  }

  for (let i = 1; i < arr.length; ++i) {
    if (minDiff === Math.abs(arr[i] - arr[i - 1])) ans.push([arr[i - 1], arr[i]])
  }

  return ans
}

// ANSWER
