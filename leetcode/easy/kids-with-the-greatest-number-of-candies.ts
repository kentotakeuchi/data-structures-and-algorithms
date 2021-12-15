// https://leetcode.com/problems/kids-with-the-greatest-number-of-candies/

// MINE: naive
/*
function kidsWithCandies(candies: number[], extraCandies: number): boolean[] {
    const max = Math.max(...candies)
    const ans = []
    
    for(let n of candies) {
        if(n+extraCandies >= max) ans.push(true)
        else ans.push(false)
    }
    
    return ans
};
*/

//ANSWER: more concise
function kidsWithCandies(candies: number[], extraCandies: number): boolean[] {
  const max = Math.max(...candies)
  return candies.map(candy => candy + extraCandies >= max)
}
