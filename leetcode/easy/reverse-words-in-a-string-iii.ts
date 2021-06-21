// https://leetcode.com/problems/reverse-words-in-a-string-iii/

// MINE: built-in
/*
function reverseWords(s: string): string {
    if(s.length === 1) return s
    return s.split(' ').map(word => word.split('').reverse().join('')).join(' ')
};
*/

// ANSWER: non built-in
function reverseWords(s: string): string {
  let res = ''
  let word = ''
  for (let c of s) {
    if (c === ' ') {
      res += word + c
      word = ''
    } else {
      word = c + word
    }
  }
  return res + word
}
