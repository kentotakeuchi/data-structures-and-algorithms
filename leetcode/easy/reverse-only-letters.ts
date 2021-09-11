// https://leetcode.com/problems/reverse-only-letters/

// MINE: two pointers
/*
function reverseOnlyLetters(s: string): string {
    const re = /[a-zA-Z]/
    let l = 0
    let r = s.length-1
    const ss = s.split('')
    
    while(l < r) {
        if(re.test(ss[l]) && re.test(ss[r])) {
            // [ss[l], ss[r]] = [ss[r], ss[l]] // why this doesn't work?
            let temp = ss[l]
            ss[l] = ss[r]
            ss[r] = temp
            ++l
            --r
            continue
        }
        if(!re.test(ss[l])) ++l
        if(!re.test(ss[r])) --r
    }
    
    return ss.join('')
};
*/

// ANSWER: stack of letters
function reverseOnlyLetters(s: string): string {
  const re = /[a-zA-Z]/
  const chars = s.split('').filter(v => re.test(v))
  const arr = []
  for (let i = 0; i < s.length; i++) {
    if (re.test(s[i])) {
      arr.push(chars.pop())
    } else {
      arr.push(s[i])
    }
  }
  return arr.join('')
}
