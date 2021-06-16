// https://leetcode.com/problems/longest-uncommon-subsequence-i/

// MINE
/*
function findLUSlength(a: string, b: string): number {
    
};
*/

// ANSWER
function findLUSlength(a: string, b: string): number {
  // identical strings don't have uncommon subsequence
  if (a === b) return -1
  // the longer string itself is the longest uncommon subsequence
  else return Math.max(a.length, b.length)
}
