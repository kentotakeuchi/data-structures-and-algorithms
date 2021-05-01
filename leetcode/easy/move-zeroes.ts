// https://leetcode.com/problems/move-zeroes/

/**
 Do not return anything, modify nums in-place instead.
 */

// MINE
/*
function moveZeroes(nums: number[]): void {
    let len = nums.length
    let i = 0
    
    while(i < len) {
        console.log({i, len , nums})
        if(nums[i] === 0) {
            nums.splice(i, 1)
            nums.push(0)
            --i
            --len
        }
        ++i
    }

    console.log(`done: ${nums}`)
};
*/

// ANSWER
/*
function moveZeroes(nums: number[]): void {
    let n = nums.length
    
    // count the zeros
    let numZeroes = 0
    for(let i=0; i<n; ++i) {
        if(nums[i] == 0) ++numZeroes
    }

    // make all the non-zero elements retain their original order.
    let ans = []
    for (let i = 0; i < n; i++) {
        if (nums[i] != 0) {
            ans.push(nums[i])
        }
    }

    // move all zeroes to the end
    while (numZeroes--) {
        ans.push(0)
    }

    // combine the result
    for (let i = 0; i < n; i++) {
        nums[i] = ans[i]
    }
}
*/

// ANSWER
/*
function moveZeroes(nums: number[]): void {
    let lastNonZeroFoundAt = 0;
    // If the current element is not 0, then we need to
    // append it just in front of last non 0 element we found. 
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] != 0) {
            nums[lastNonZeroFoundAt++] = nums[i];
        }
    }
 	// After we have finished processing new elements,
 	// all the non-zero elements are already at beginning of array.
 	// We just need to fill remaining array with 0's.
    for (let i = lastNonZeroFoundAt; i < nums.length; i++) {
        nums[i] = 0;
    }

}
*/

// ANSWER
function moveZeroes(nums: number[]): void {
  for (let lastNonZeroFoundAt = 0, cur = 0; cur < nums.length; cur++) {
    if (nums[cur] != 0) {
      swap(nums, lastNonZeroFoundAt++, cur)
    }
  }
}

function swap(arr: number[], i: number, j: number) {
  ;[arr[i], arr[j]] = [arr[j], arr[i]]
}
