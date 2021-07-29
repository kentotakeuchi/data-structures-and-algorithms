// https://leetcode.com/problems/to-lower-case/

// MINE
/*
function toLowerCase(s: string): string {
    // return s.toLowerCase()
    
    let result = ''
    let ascii
    for(let i=0; i<s.length; ++i) {
        ascii = s.charCodeAt(i)
        if(65 <= ascii && ascii <= 90) result += s[i].toLowerCase()
        else result += s[i]
    }
    
    return result
};
*/

// ANSWER: no toLowerCase()
function toLowerCase2(str: string): string {
  let res = ''
  for (let s of str) {
    res += s <= 'Z' && s >= 'A' ? String.fromCharCode(s.charCodeAt(0) + 32) : s
  }
  return res
}
