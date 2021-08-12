// https://leetcode.com/problems/unique-morse-code-words/

// MINE
/*
function uniqueMorseRepresentations(words: string[]): number {
    const morse = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."]
    const result = []
    
    // charCodeAt('a') = 97
    for(let word of words) {
        let mrs = ''
        for(let i=0; i<word.length; ++i) {
            mrs += morse[word.charCodeAt(i) - 97]
        }
        result.push(mrs)
    }
    
    return new Set(result).size
};
*/

// ANSWER: hash set
function uniqueMorseRepresentations(words: string[]): number {
  const morse = [
    '.-',
    '-...',
    '-.-.',
    '-..',
    '.',
    '..-.',
    '--.',
    '....',
    '..',
    '.---',
    '-.-',
    '.-..',
    '--',
    '-.',
    '---',
    '.--.',
    '--.-',
    '.-.',
    '...',
    '-',
    '..-',
    '...-',
    '.--',
    '-..-',
    '-.--',
    '--..'
  ]

  const seen = new Set()
  for (let word of words) {
    let code = ''
    for (let c of word) {
      code += morse[c.charCodeAt(0) - 'a'.charCodeAt(0)]
    }
    seen.add(code)
  }

  return seen.size
}
