// https://leetcode.com/problems/check-if-word-equals-summation-of-two-words/

// MINE
/*
function isSumEqual(firstWord: string, secondWord: string, targetWord: string): boolean {
    let one = '', two = '', three = ''
    
    for(let char of firstWord) one += (char.charCodeAt(0) - 97).toString()
    for(let char of secondWord) two += (char.charCodeAt(0) - 97).toString()
    for(let char of targetWord) three += (char.charCodeAt(0) - 97).toString()
    
    return parseInt(one) + parseInt(two) === parseInt(three)
};
*/

// ANSWER
function isSumEqual(firstWord: string, secondWord: string, targetWord: string): boolean {
  const first = toInt(firstWord),
    second = toInt(secondWord),
    target = toInt(targetWord)

  return first + second === target

  function toInt(word: string): number {
    let value = 0
    for (let char of word) value = value * 10 + (char.charCodeAt(0) - 97)
    return value
  }
}
