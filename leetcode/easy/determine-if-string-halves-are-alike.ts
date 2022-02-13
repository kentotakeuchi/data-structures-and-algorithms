// https://leetcode.com/problems/determine-if-string-halves-are-alike/

// MINE
/*
function halvesAreAlike(s: string): boolean {
    const vowels = ' aeiouAEIOU'
    const counts = [0, 0]
    
    for(let i=0, j=s.length-1; i<j; ++i, --j) {
        if(vowels.includes(s[i])) ++counts[0]
        if(vowels.includes(s[j])) ++counts[1]
    }
    
    return counts[0] === counts[1]
};
*/

// ANSWER: set
function halvesAreAlike(s: string): boolean {
  const target = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'])
  let a = 0,
    b = 0
  for (let left = 0, right = s.length - 1; left < right; ++left, --right) {
    target.has(s[left]) && ++a
    target.has(s[right]) && ++b
  }
  return a === b
}
