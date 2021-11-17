// https://leetcode.com/problems/decompress-run-length-encoded-list/

// MINE: naive
/*
function decompressRLElist(nums: number[]): number[] {
    const ans = []
    
    for(let i=1; i<nums.length; i+=2) {
        let freq = nums[i-1]
        const val = nums[i]
        
        while(freq-- > 0) ans.push(val) 
    }
    
    return ans
};
*/

// ANSWER
function decompressRLElist(nums: number[]): number[] {
  const result = []

  for (let i = 1; i < nums.length; i += 2) {
    result.push(...new Array(nums[i - 1]).fill(nums[i]))
  }

  return result
}
