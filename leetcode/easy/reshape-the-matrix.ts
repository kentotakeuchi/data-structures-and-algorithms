// https://leetcode.com/problems/reshape-the-matrix/

// MINE..
/*
function matrixReshape(mat: number[][], r: number, c: number): number[][] {
    const row = mat.length
    const col = mat[0].length
    
    // base case
    if(row*col < r*c) return mat
    
    const flat = mat.flatMap(arr => arr) // [1,2,3,4]
    for(let i=0; i<r; i += c) {
        
    }
    
    return results
};
*/

// ANSWER: es6
function matrixReshape(nums: number[][], r: number, c: number): number[][] {
  var arr = nums.flat()
  if (r * c != arr.length) return nums

  var res = []
  while (arr.length) res.push(arr.splice(0, c))
  return res
}

// An array containing the deleted elements.
// If only one element is removed, an array of one element is returned.
// If no elements are removed, an empty array is returned.
