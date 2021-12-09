// https://leetcode.com/problems/minimum-subsequence-in-non-increasing-order/

// MINE
/*
function minSubsequence(nums: number[]): number[] {
    nums.sort((a, z) => z - a) // ex. [10,9,8,4,3]
    const ans = []
    
    for(let i=0; i<nums.length; ++i) {
        ans.push(nums[i])
        const target = ans.reduce((acc, cur) => acc + cur, 0)
        let sum = 0
        let bool = true
        
        for(let j = i+1; j<nums.length; ++j) {
            sum += nums[j]
            if(sum >= target) {
                bool = false
                break
            }
        }
        
        if(bool) return ans
    }
    
    return ans
};
*/

// ANSWER
function minSubsequence(nums: number[]): number[] {
  nums.sort((a, z) => a - z)
  const ans = []
  let numSum = nums.reduce((acc, cur) => acc + cur, 0),
    ansSum = 0

  while (ansSum <= numSum) {
    const n: number = nums.pop()!
    ans.push(n)
    ansSum += n
    numSum -= n
  }

  return ans
}
