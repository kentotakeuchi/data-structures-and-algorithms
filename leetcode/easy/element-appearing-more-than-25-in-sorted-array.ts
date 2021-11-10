// https://leetcode.com/problems/element-appearing-more-than-25-in-sorted-array/

// MINE
/*
function findSpecialInteger(arr: number[]): number {
   const map = new Map()
   let max = [0, 0]
   
   for(const n of arr) {
       const val = map.get(n)+1 || 1
       map.set(n, val)
       if(val > max[1]) {
           max[0] = n
           max[1] = val
       }
   }
    
   return max[0]
};
*/

// ANSWER:
function findSpecialInteger(arr: number[]): number {
  const len = arr.length,
    t = Math.floor(len / 4)

  for (let i = 0; i < len - t; ++i) {
    if (arr[i] === arr[i + t]) return arr[i]
  }

  return -1
}
