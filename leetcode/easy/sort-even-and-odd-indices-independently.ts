// https://leetcode.com/problems/sort-even-and-odd-indices-independently/

// MINE
function sortEvenOdd(nums: number[]): number[] {
  const odds = nums.filter((n, i) => i % 2 === 1).sort((a, z) => z - a),
    evens = nums.filter((n, i) => i % 2 === 0).sort((a, z) => a - z)
  let e = 0,
    o = 0
  for (let i = 0; i < nums.length; ++i) nums[i] = i % 2 === 0 ? evens[e++] : odds[o++]
  return nums
}

// ANSWER
