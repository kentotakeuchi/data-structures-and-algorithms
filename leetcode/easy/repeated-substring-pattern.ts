// https://leetcode.com/problems/repeated-substring-pattern/

// MINE..
/*
function repeatedSubstringPattern(s: string): boolean {

};
*/

// ANSWER
/*
function repeatedSubstringPattern(s: string): boolean {
    return s.repeat(2).slice(1, -1).includes(s);
};

// abababab --> bababa --> 
*/

// ANSWER
/*
function repeatedSubstringPattern(s: string): boolean {
    let i = 1, len = s.length;
    while (i <= Math.floor(len/2)) {
        if (s.slice(0, i).repeat(len/i) == s) return true;
        i++
    }
    return false;
};
*/

// ANSWER
function repeatedSubstringPattern(s: string): boolean {
  let pattern = ''
  for (let i = 0; i < Math.floor(s.length / 2); i++) {
    pattern += s[i]
    if (pattern.repeat(s.length / pattern.length) === s) return true
  }
  return false
}
