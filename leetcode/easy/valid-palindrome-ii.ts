// https://leetcode.com/problems/valid-palindrome-ii/

// MINE: brute force(limit exceeded..)
/*
function validPalindrome(s: string): boolean {
    if(s.length === 1 || s.length === 2) return true
    
    if(isPalindrome(s)) return true
    
    for(let i=0; i<s.length; ++i) {
        const newS = s.substring(0, i) + s.substring(i+1)
        console.log({i, newS})
        if(isPalindrome(newS)) return true
    }
    
    return false
    
    function isPalindrome(str: string) {
        return str === str.split('').reverse().join('')
    }
};
*/

// ANSWER
function validPalindrome2(s: string): boolean {
  for (let i = 0, stop = s.length / 2; i < stop; i++) {
    let j = s.length - i - 1
    if (s[i] !== s[j]) {
      return isPalindrome2(cut(s, i)) || isPalindrome2(cut(s, j))
    }
  }
  return true
}

const cut = (s: string, i: number) => s.substr(0, i) + s.substr(i + 1)

const isPalindrome2 = (s: string) => s === s.split('').reverse().join('')
