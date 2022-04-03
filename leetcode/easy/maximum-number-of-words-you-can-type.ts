// https://leetcode.com/problems/maximum-number-of-words-you-can-type/

// MINE: set
/*
function canBeTypedWords(text: string, brokenLetters: string): number {
    let ans = 0
    const set = new Set(brokenLetters.split(''))
    for(let word of text.split(' ')) {
        let hasBroken = false
        for(let char of word) {
            if(set.has(char)) {
                hasBroken = true
                break
            }
        }
        !hasBroken && ++ans
    }
    return ans
};
*/

// ANSWER
function canBeTypedWords(text: string, brokenLetters: string): number {
  let words = text.split(' ')
  let count = 0
  for (let word of words) {
    for (let i = 0; i < word.length; i++) {
      if (brokenLetters.includes(word[i])) {
        count++
        break
      }
    }
  }
  return words.length - count
}
