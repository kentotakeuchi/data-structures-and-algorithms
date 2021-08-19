// https://leetcode.com/problems/positions-of-large-groups/

// MINE: two pointers
/*
function largeGroupPositions(s: string): number[][] {
    // large group = length >= 3
    
    const results = []
    let i = 0;
    let j = 1;
    
    while(j < s.length) {
        console.log({i, j, results})
        if(s[i] !== s[j]) {
            if(j - i >= 3) results.push([i, j-1])
            i = j
            ++j
        } else {
            ++j
        }
    }
    
    if(j - i >= 3) results.push([i, j-1])
    
    return results
};
*/

// ANSWER
function largeGroupPositions(s: string): number[][] {
  const res = []
  for (let i = 0, j = 0; i < s.length; i = j) {
    while (j < s.length && s[j] === s[i]) ++j
    if (j - i >= 3) res.push([i, j - 1])
  }
  return res
}
