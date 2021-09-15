// https://leetcode.com/problems/long-pressed-name/

// MINE..
/*
function isLongPressedName(name: string, typed: string): boolean {
    if(name === typed) return true
    
    let i = 0
    let j = 0
    
    while(i < name.length) {
        if(name[i] !)
    }
    
    return true
};
*/

// ANSWER: two pointers
function isLongPressedName(name: string, typed: string): boolean {
  let i = 0,
    m = name.length,
    n = typed.length
  for (let j = 0; j < n; ++j)
    if (i < m && name[i] === typed[j]) ++i
    else if (j == 0 || typed[j] !== typed[j - 1]) return false
  return i == m
}
