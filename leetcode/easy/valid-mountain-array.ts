// https://leetcode.com/problems/valid-mountain-array/

// MINE
/*
function validMountainArray(arr: number[]): boolean {
    if(arr.length < 3) return false
    
    let max = Math.max(...arr)
    let indexOfMax = arr.indexOf(max)
    
    if(indexOfMax === 0 || indexOfMax === arr.length-1) return false
    
    for(let i=indexOfMax-1, j=indexOfMax+1; i>=0 || j<arr.length; --i, ++j) {
        console.log({max, indexOfMax, i, j})
        if(arr[i] >= arr[i+1] || arr[j] >= arr[j-1]) return false
    }
    
    return true
};
*/

// ANSWER: one pass
function validMountainArray(arr: number[]): boolean {
  const N = arr.length
  let i = 0

  // walk up
  while (i + 1 < N && arr[i] < arr[i + 1]) ++i

  // peak can't be first or last
  if (i === 0 || i === N - 1) return false

  // walk down
  while (i + 1 < N && arr[i] > arr[i + 1]) ++i

  return i === N - 1
}
