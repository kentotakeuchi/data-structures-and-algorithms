// https://leetcode.com/problems/rearrange-spaces-between-words/

// MINE..
/*
function reorderSpaces(text: string): string {
    let space = 0, temp = ''
    const arr = []
    
    for(let char of text) {
        if(char === ' ') {
            if(temp !== '') arr.push(temp)
            ++space
            temp = ''
        } else {
            temp += char
        }
    }
    
    
};
*/

// ANSWER
function reorderSpaces(text: string): string {
  const words = text.trim().split(/\s+/)
  const numOfWords = words.length

  let spaces = 0
  for (let char of text) if (char === ' ') ++spaces

  let gap = numOfWords <= 1 ? 0 : Math.floor(spaces / (numOfWords - 1))

  let trailingSpaces = spaces - gap * (numOfWords - 1)

  return words.join(' '.repeat(gap)) + ' '.repeat(trailingSpaces)
}
