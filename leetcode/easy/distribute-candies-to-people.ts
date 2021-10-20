// https://leetcode.com/problems/distribute-candies-to-people/

// MINE: accepted but ugly..
/*
function distributeCandies(candies: number, num_people: number): number[] {
    const ans = new Array(num_people).fill(0)
    let i = 0
    let give = 1
    
    while(candies > 0) {
        i === ans.length ? ans[i=0] += give : ans[i] += give
        candies -= give
        ++i
        ++give
        if(candies < give) {
            i === ans.length ? ans[i=0] += candies : ans[i] += candies
            break
        }
    }
    
    return ans
};
*/

// ANSWER
function distributeCandies2(candies: number, num_people: number): number[] {
  const res = new Array(num_people).fill(0)
  for (let i = 0; candies > 0; ++i) {
    res[i % num_people] += Math.min(candies, i + 1)
    candies -= i + 1
  }
  return res
}
