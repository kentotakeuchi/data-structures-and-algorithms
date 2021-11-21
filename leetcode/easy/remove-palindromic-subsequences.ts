// https://leetcode.com/problems/remove-palindromic-subsequences/

// MINE: too slow
/*
function removePalindromeSub(s: string): number {
    let ans = 1
    if(isPalindrome(s)) return ans
    
    for(let l=0, r=s.length-1; l<=r; ++l, --r) {
        if(isPalindrome(s.substring(l+1)) || isPalindrome(s.substring(l, r))) return ++ans
    }
    
    return ans
};


function isPalindrome(str: string): boolean {
    return str === str.split('').reverse().join('')
}
*/

/***
It's important to understand the distinction between a substring and a subsequence. A substring is a contiguous block of characters between one index and and another in the input string. A subsequence, which we're dealing with here, is any sequence of characters from the string, as long as they're in their original order. But you can pick and choose which characters you want in a subsequence, even if there are gaps between
***/

// ANSWER
/*
function removePalindromeSub(s: string): number {
    return !s.length ? 0 : (s === s.split('').reverse().join('') ? 1 : 2)
}
*/

// ANSWER
function removePalindromeSub(s: string): number {
  if (s.length === 0) return 0
  for (let left = 0, right = s.length - 1; left < right; ++left, --right) {
    if (s[left] !== s[right]) return 2
  }
  return 1
}
