// https://leetcode.com/problems/maximum-number-of-words-found-in-sentences/

// MINE
/*
function mostWordsFound(sentences: string[]): number {
    let max = 0
    for(let s of sentences) {
        const len = s.split(' ').length
        if(len > max) max = len
    } 
    return max
};
*/

// ANSWER: count spaces
function mostWordsFound(sentences: string[]): number {
  let spaces = 0,
    max = 0
  for (let s of sentences) {
    for (let char of s) if (char === ' ') ++spaces
    if (spaces > max) max = spaces
    spaces = 0
  }
  return max + 1
}
