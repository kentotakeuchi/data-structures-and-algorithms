// https://leetcode.com/problems/duplicate-zeros/

/**
 Do not return anything, modify arr in-place instead.
 */

// MINE
/*
function duplicateZeros(arr: number[]): void {
    const len = arr.length
    let i=0
    
    while(i<len) {
        if(arr[i] === 0) {
            arr.splice(i, 0, 0)
            i += 2
        } else {
            ++i
        }
    }

    arr.splice(len, arr.length-len)
};
*/

// ANSWER: use built-in func
/*
function duplicateZeros(arr: number[]): void {    
    for (var i=0; i<arr.length; i++) {
        if (arr[i] === 0) {
            arr.splice(i, 0, 0);
            arr.pop();
            i+=1
        }
    }
    
};
*/

// ANSWER: two pass
function duplicateZeros(arr: number[]): void {
  let zeros = 0
  let len = arr.length - 1

  // Find the number of zeros to be duplicated
  // Stopping when left points beyond the last element in the original array
  // which would be part of the modified array
  for (let l = 0; l <= len - zeros; ++l) {
    // count the zeros
    if (arr[l] === 0) {
      // Edge case: This zero can't be duplicated. We have no more space,
      // as left is pointing to the last element which could be included
      if (l === len - zeros) {
        // For this zero we just copy it without duplication.
        arr[len] = 0
        --len
        break
      }
      ++zeros
    }
  }

  // Start backwards from the last element which would be part of new array.
  const last = len - zeros

  // Copy zero twice, and non zero once.
  for (let i = last; i >= 0; --i) {
    if (arr[i] === 0) {
      arr[i + zeros] = 0
      --zeros
      arr[i + zeros] = 0
    } else {
      arr[i + zeros] = arr[i]
    }
  }
}
