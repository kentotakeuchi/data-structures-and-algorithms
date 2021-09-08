// https://leetcode.com/problems/sort-array-by-parity/

// MINE: filter func
/*
function sortArrayByParity(nums: number[]): number[] {
    const evens = nums.filter(n => n % 2 === 0)
    const odds = nums.filter(n => n % 2 === 1)
    return [...evens, ...odds]
};
*/

// MINE: mutation with splice
/*
function sortArrayByParity(nums: number[]): number[] {
    const len = nums.length
    for(let i=0; i<len; ++i) {
        if(nums[i] % 2 === 0) {
            nums.unshift(nums.splice(i, 1)[0])
        }
    }
    
    return nums
}
*/

// ANSWER: two pass
/*
function sortArrayByParity(nums: number[]): number[] {
    const ans: number[] = []
    let t = 0
    
    for(let i=0; i<nums.length; ++i) {
        if(nums[i] % 2 === 0) ans[t++] = nums[i]
    }
    
    for(let i=0; i<nums.length; ++i) {
        if(nums[i] % 2 === 1) ans[t++] = nums[i]
    }
    
    return ans
}
*/

// ANSWER: in-place
function sortArrayByParity(nums: number[]): number[] {
  let i = 0
  let j = nums.length - 1

  while (i < j) {
    if (nums[i] % 2 > nums[j] % 2) [nums[i], nums[j]] = [nums[j], nums[i]]

    if (nums[i] % 2 === 0) i++
    if (nums[j] % 2 === 1) j--
  }

  return nums
}
