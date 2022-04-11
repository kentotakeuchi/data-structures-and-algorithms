// https://leetcode.com/problems/minimum-time-to-type-word-using-special-typewriter/

// MINE
/*
function minTimeToType(word: string): number {
    let count = 0
    let cur = 'a'
    for(let char of word) {
        const s = Math.min(Math.abs(char.charCodeAt(0) - cur.charCodeAt(0)), Math.abs(Math.abs(char.charCodeAt(0) - cur.charCodeAt(0)) - 26))
        count += s + 1
        cur = char
    }
    return count
};
*/

// ANSWER
function minTimeToType(word: string): number {
  let count = word.length
  let prev = 'a'
  for (let char of word) {
    const diff = Math.abs(char.charCodeAt(0) - prev.charCodeAt(0))
    count += Math.min(diff, 26 - diff)
    prev = char
  }
  return count
}
