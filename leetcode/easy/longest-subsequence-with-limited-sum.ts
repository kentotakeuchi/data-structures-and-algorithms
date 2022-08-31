// https://leetcode.com/problems/longest-subsequence-with-limited-sum/

// MINE
/*
function answerQueries(nums: number[], queries: number[]): number[] {
    nums.sort((a, z) => a - z)
    const ans = []
    for(let i=0; i<queries.length; ++i) {
        let sum = 0
        for(let j=0; j<nums.length; ++j) {
            sum += nums[j]
            if(sum > queries[i]) {
                ans.push(j)
                break
            }
            if(j === nums.length-1) ans.push(j+1)
        }
    }
    return ans
};
*/

// ANSWER
function answerQueries(nums: number[], queries: number[]): number[] {
  nums.sort((a, z) => a - z)
  const ans = new Array(queries.length).fill(0)
  for (let i = 1; i < nums.length; ++i) nums[i] += nums[i - 1]
  for (let i = 0; i < queries.length; ++i) {
    for (let j = 0; j < nums.length; ++j)
      if (nums[j] <= queries[i]) ans[i] = j + 1
      else break
  }
  return ans
}
