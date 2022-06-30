// https://leetcode.com/problems/count-asterisks/

// MINE
/*
function countAsterisks(s: string): number {
    let ans = 0
    const A = s.split('|')
    for(let i=0; i<A.length; i+=2) {
        for(let c of A[i]) if(c === '*') ++ans
    }
    return ans
};
*/

// MINE
function countAsterisks(s: string): number {
  let ans = 0,
    bar = 0
  for (let i = 0; i < s.length; ++i) {
    if (s[i] === '|') ++bar
    if (bar % 2 === 0 && s[i] === '*') ++ans
  }
  return ans
}

// ANSWER
