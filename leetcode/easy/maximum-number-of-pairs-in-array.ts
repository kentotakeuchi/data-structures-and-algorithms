// https://leetcode.com/problems/maximum-number-of-pairs-in-array/

// MINE..
/*
function numberOfPairs(nums: number[]): number[] {
    const ans = [0, 0]
    while(nums.length > 1) {
        console.log({nums})
        for(let i=0; i<nums.length; ++i) {
            let dupIdx = nums.slice(i+1).findIndex(el => el === nums[i])
            console.log({dupIdx})
            if(dupIdx !== -1) {
                ++ans[0]
                nums.splice(0, 1)
                nums.splice(dupIdx, 1)
                break
            }
        }
        break
    }
    ans[1] = nums.length
    return ans
};
*/

// ANSWER
function numberOfPairs(nums: number[]): number[] {
  const counts = new Array(101).fill(0)
  const ans = [0, 0]
  for (let n of nums) ++counts[n]
  for (let c of counts) {
    ans[0] += Math.floor(c / 2)
    ans[1] += c % 2
  }
  return ans
}
