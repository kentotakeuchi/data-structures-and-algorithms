// https://leetcode.com/problems/binary-prefix-divisible-by-5/

// MINE..
/*
function prefixesDivBy5(nums: number[]): boolean[] {
    const results = []
    const str = nums.join('')
    
    for(let i=1; i<=str.length; ++i) {
        console.log(parseInt(str.substring(0, i), 2) % 5)
        parseInt(str.substring(0, i), 2) % 5 === 0 ? results.push(true) : results.push(false)
    }
    
    return results
};
*/

// ANSWER
function prefixesDivBy5(nums: number[]): boolean[] {
  for (let i = 1; i < nums.length; ++i) {
    nums[i] += (nums[i - 1] * 2) % 5
  }
  console.log({ nums })

  return nums.map(bit => bit % 5 === 0)
}
