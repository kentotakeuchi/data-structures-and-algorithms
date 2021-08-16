// https://leetcode.com/problems/most-common-word/

// MINE..
/*
function mostCommonWord(paragraph: string, banned: string[]): string {
    let max = -Infinity
    let maxWord = ''
    const map = new Map()

    let arr = paragraph.toLowerCase().split(' ')

    for(let word of arr) {
      const w = word.replace(/\W/g, '')
      if(banned.includes(w)) continue
      let val = map.get(w) || 1
      map.set(w, ++val || val)
    
      if(max < val) {
        max = val
        maxWord = w
      }
    }
    
    return maxWord
};
*/

// ANSWER
function mostCommonWord(paragraph: string, banned: string[]): string {
  const bannedSet = new Set(banned)
  const words = paragraph.toLowerCase().split(/\W+/)
  console.log({ words })
  const map: { [key: string]: number } = {}
  let answer = { count: 0, word: '' }

  for (const w of words) {
    if (!bannedSet.has(w)) {
      if (map[w] == null) map[w] = 0
      map[w]++

      if (map[w] > answer.count) {
        answer.count = map[w]
        answer.word = w
      }
    }
  }

  return answer.word
}
