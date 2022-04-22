// https://leetcode.com/problems/two-out-of-three/

// MINE
/*
function twoOutOfThree(nums1: number[], nums2: number[], nums3: number[]): number[] {
    const map = new Map(), ans = new Set()
    const arr = [...new Set(nums1), ...new Set(nums2), ...new Set(nums3)]
    for(let n of arr) {
        if(map.has(n)) ans.add(n)
        map.set(n, true)
    }
    return [...ans] as number[]
};
*/

// ANSWER
function twoOutOfThree(nums1: number[], nums2: number[], nums3: number[]): number[] {
  const arr = new Array(3).fill(0).map(_ => new Array(101).fill(0)),
    ans = []
  for (let n of nums1) arr[0][n] = true
  for (let n of nums2) arr[1][n] = true
  for (let n of nums3) arr[2][n] = true
  for (let i = 1; i < 101; ++i) if (arr[0][i] + arr[1][i] + arr[2][i] > 1) ans.push(i)
  return ans
}
