// https://leetcode.com/problems/merge-strings-alternately/

// MINE
/**
function mergeAlternately(word1: string, word2: string): string {
    const minLen = Math.min(word1.length, word2.length)
    const short = word1.length > word2.length ? word2 : word1
    const long = word1.length <= word2.length ? word2 : word1
    let ans = '', i
    
    for(i=0; i<short.length; ++i) {
        ans += word1[i] + word2[i]
    }
    
    return ans += long.substring(i)
};
*/

// ANSWER
function mergeAlternately(word1: string, word2: string): string {
  let n = word1.length,
    m = word2.length,
    i = 0,
    j = 0,
    ans = ''

  while (i < n || j < m) {
    if (i < n) ans += word1[i++]
    if (j < m) ans += word2[j++]
  }

  return ans
}
