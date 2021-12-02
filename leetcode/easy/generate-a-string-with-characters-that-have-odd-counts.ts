// https://leetcode.com/problems/generate-a-string-with-characters-that-have-odd-counts/

// MINE
/*
function generateTheString(n: number): string {
    let ans = ''
    
    for(let i=1; i<n; ++i) {
        ans += 'a'
    }
    
    return ans += ans.length & 1 ? 'b' : 'a'
};
*/

// ANSWER: repeat func
function generateTheString(n: number): string {
  return n & 1 ? 'a'.repeat(n) : `${'a'.repeat(n - 1)}b`
}
