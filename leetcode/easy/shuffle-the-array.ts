// https://leetcode.com/problems/shuffle-the-array/

// MINE
/*
function shuffle(nums: number[], n: number): number[] {
    const ans = []
    
    for(let i=0, j=n; j<nums.length; ++i, ++j) {
        ans.push(nums[i], nums[j])
    }
    
    return ans
};
*/

// ANSWER: in-place
// https://leetcode.com/problems/shuffle-the-array/discuss/675956/In-Place-O(n)-Time-O(1)-Space-With-Explanation-and-Analysis
function shuffle(nums: number[], n: number): number[] {
  let i = n - 1
  for (let j = nums.length - 1; j >= n; j--) {
    nums[j] <<= 10
    nums[j] |= nums[i]
    i--
  }

  i = 0
  for (let j = n; j < nums.length; j++) {
    const num1 = nums[j] & 1023
    const num2 = nums[j] >> 10
    nums[i] = num1
    nums[i + 1] = num2
    i += 2
  }

  return nums
}
