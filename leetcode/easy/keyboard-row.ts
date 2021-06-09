// https://leetcode.com/problems/keyboard-row/

// MINE
/*
function findWords(words: string[]): string[] {
    const row1 = 'qwertyuiop'
    const row2 = 'asdfghjkl'
    const row3 = 'zxcvbnm'
    const results = []
    
    for(let word of words) {
        let w = word.toLowerCase()
        let row
        let is = true
        if(row1.includes(w[0])) row = row1
        else if(row2.includes(w[0])) row = row2
        else row = row3
        
        for(let char of w) {
            if(!row.includes(char)) {
                is = false
                break
            }
        }
        
        is && results.push(word)
    }
    
    return results
};
*/

// ANSWER: regex
/*
function findWords(words: string[]): string[] {
    return words.filter((w) => {
        // remove word from array if it fails matching all three rows
        if (
            !/^[qwertyuiop]*$/i.test(w) &&
            !/^[asdfghjkl]*$/i.test(w) &&
            !/^[zxcvbnm]*$/i.test(w)
        ) return false;
        
        return true;
    });
};

// ^ --> Matches the beginning of input
// $ --> Matches the end of input
*/

// ANSWER: set
function findWords(words: string[]): string[] {
  const row1 = new Set('qwertyuiop')
  const row2 = new Set('asdfghjkl')
  const row3 = new Set('zxcvbnm')

  const res = []

  for (const word of words) {
    if (canBeTyped(word, row1) || canBeTyped(word, row2) || canBeTyped(word, row3)) res.push(word)
  }

  return res

  function canBeTyped(word: string, row: Set<string>): boolean {
    for (const char of word) {
      if (!row.has(char.toLowerCase())) return false
    }
    return true
  }
}
