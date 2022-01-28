// https://leetcode.com/problems/sort-array-by-increasing-frequency/

// MINE
/*
function frequencySort(nums: number[]): number[] {
    const map = new Map()
    
    for(let n of nums) map.set(n, map.get(n)+1 || 1)
    
    const arr = [...map]
    arr.sort((a, z) => {
        if(a[1] === z[1]) return z[0] - a[0]
        return a[1] - z[1]
    })
    
    const ans = []
    arr.forEach(([key, val]) => {
        while(val-- > 0) ans.push(key)
    })
    
    return ans
};
*/

// ANSWER
function frequencySort(nums: number[]): number[] {
  const map = new Map()
  for (let n of nums) {
    map.set(n, map.get(n) + 1 || 1)
  }
  return nums.sort((a, b) => map.get(a) - map.get(b) || b - a)
}
