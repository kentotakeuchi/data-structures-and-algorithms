// https://leetcode.com/problems/degree-of-an-array/

// MINE..
/*
function findShortestSubArray(nums: number[]): number {
    const map = new Map()
    for(let n of nums) {
        map.set(n, map.get(n)+1 || 1)
    }
    
    const maxNums = []
    const maxNum = Math.max(...map.values())
    for(let [key, val] of map) {
        if(val === maxNum) maxNums.push(key)
    }
    console.log({maxNums}) // [1, 2]
    
    let minLen = Infinity
    for(let target of maxNums) {
        let start = nums.indexOf(target)
    }
    
    return 0
};
*/

// ANSWER
function findShortestSubArray(nums: number[]): number {
  const counts = new Map()
  const firstIdxes = new Map()
  const lastIdxes = new Map()
  let max = 0

  for (let i = 0; i < nums.length; ++i) {
    const k = nums[i]
    counts.set(k, counts.get(k) + 1 || 1)
    max = Math.max(max, counts.get(k))
    if (firstIdxes.get(k) === undefined) firstIdxes.set(k, i)
    lastIdxes.set(k, i)
  }

  let res = nums.length
  for (const [key, val] of counts) {
    if (val === max) {
      res = Math.min(res, lastIdxes.get(key) - firstIdxes.get(key) + 1)
    }
  }
  console.log({ counts, firstIdxes, lastIdxes, max, res })

  return res
}
