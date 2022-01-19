// https://leetcode.com/problems/sum-of-all-odd-length-subarrays/

// MINE: brute force
function sumOddLengthSubarrays(arr: number[]): number {
  let ans = 0

  for (let i = 0; i < arr.length; ++i) {
    for (let j = i; j < arr.length; ++j) {
      if ((i - j) % 2 === 0) {
        for (let k = i; k <= j; ++k) ans += arr[k]
      }
    }
  }

  return ans
}

// ANSWER
