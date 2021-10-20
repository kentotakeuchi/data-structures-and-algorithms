// https://leetcode.com/problems/relative-sort-array/

// MINE
/*
function relativeSortArray(arr1: number[], arr2: number[]): number[] {
    const map = new Map()
    const has = []
    const noHas = []
    
    for(let num of arr1) {
        map.set(num, map.get(num)+1 || 1)
        if(!arr2.includes(num)) noHas.push(num)
    }
    
    for(let num of arr2) {
        for(let i=0; i<map.get(num); ++i) has.push(num)
    }
    
    return [...has, ...noHas.sort((a, z) => a - z)]
};
*/

// ANSWER
function relativeSortArray(arr1: number[], arr2: number[]): number[] {
  const lookup = new Map()
  const N = arr2.length
  arr2.forEach((a, i) => {
    lookup.set(a, i)
  })
  return arr1.sort((a, b) => {
    a = lookup.has(a) ? lookup.get(a) : N + a
    b = lookup.has(b) ? lookup.get(b) : N + b
    return a - b
  })
}
