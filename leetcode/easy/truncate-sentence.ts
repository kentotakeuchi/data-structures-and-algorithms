// https://leetcode.com/problems/truncate-sentence/

// MINE
/*
function truncateSentence(s: string, k: number): string {
    return s.split(' ').slice(0, k).join(' ')
};
*/

// ANSWER: without split
function truncateSentence(s: string, k: number): string {
  let spaceCount = 0
  for (let i = 0; i < s.length; ++i) {
    if (s[i] === ' ' && ++spaceCount === k) return s.slice(0, i)
  }
  return s
}
