// https://leetcode.com/problems/longest-palindrome/

// MINE
/*
function longestPalindrome(s: string): number {
    // base case
    if(s.length === 1) return 1
    
    let start = 0
    let end = s.length-1
    
    while(start <= end) {
        if()
    }
    
    return s
}
    
function isPalindrome(str: string): boolean {
    return str === str.split('').reverse().join('')
}
*/

// ANSWER: set
/*
function longestPalindrome(s: string): number {
    const set = new Set();
    let count = 0;
    
    for (const char of s) {
        if (set.has(char)) {
			count += 2;
            set.delete(char);
        } 
		else {
            set.add(char);
        }
    }

    return count + (set.size > 0 ? 1 : 0);
}
*/

// ANSWER: map
function longestPalindrome(s: string): number {
  let ans = 0
  let keys: { [key: string]: number } = {}

  for (let char of s) {
    keys[char] = (keys[char] || 0) + 1
    // if even, can be palindrome
    if (keys[char] % 2 == 0) ans += 2
  }

  // add unique center char if odd..
  return s.length > ans ? ans + 1 : ans
}
