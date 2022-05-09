// https://leetcode.com/problems/find-first-palindromic-string-in-the-array/

// MINE
function firstPalindrome(words: string[]): string {
  for (let w of words) {
    if (w === w.split('').reduce((acc, cur) => cur + acc, '')) return w
  }
  return ''
}

// ANSWER
