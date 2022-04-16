// https://leetcode.com/problems/reverse-prefix-of-word/

// MINE
/*
function reversePrefix(word: string, ch: string): string {
    const i = word.indexOf(ch)
    return word.slice(0, i+1).split('').reverse().join('') + word.slice(i+1)
};
*/

// ANSWER: without reverse
function reversePrefix(word: string, ch: string): string {
  let output = '',
    idx = word.indexOf(ch)
  for (var i = idx; i >= 0; i--) {
    output = output + word.slice(i, i + 1)
  }

  output = output + word.slice(idx + 1)

  return output
}
