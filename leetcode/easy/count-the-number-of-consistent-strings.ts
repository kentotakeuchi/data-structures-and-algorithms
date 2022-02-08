// https://leetcode.com/problems/count-the-number-of-consistent-strings/

// MINE: set
/*
function countConsistentStrings(allowed: string, words: string[]): number {
    let ans = 0
    const set = new Set()
    for(let char of allowed) set.add(char)
    
    for(let word of words) {
        for(let char of word) {
            if(!set.has(char)) {
                --ans
                break
            }
        }
        ++ans
    }
    
    return ans
};
*/

// ANSWER
function countConsistentStrings(allowed: any, words: string[]): number {
  allowed = new Set(allowed.split(''))
  let count = 0

  for (let word of words) {
    for (let char of word) {
      if (!allowed.has(char)) {
        ++count
        break
      }
    }
  }

  return words.length - count
}
