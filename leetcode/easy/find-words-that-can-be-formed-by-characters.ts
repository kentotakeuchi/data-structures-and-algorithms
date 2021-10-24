// https://leetcode.com/problems/find-words-that-can-be-formed-by-characters/

// MINE
/*
function countCharacters(words: string[], chars: string): number {
    const map = new Map()
    let sum = 0
    
    for(const char of chars) map.set(char, map.get(char)+1 || 1)
    
    for(const word of words) {
        const wordMap = new Map()
        let isFormed = true
        for(const char of word) {
            wordMap.set(char, wordMap.get(char)+1 || 1)
            if(wordMap.get(char) > map.get(char) || !map.has(char)) {
                isFormed = false
                break
            }
        }
        if(isFormed) sum += word.length
    }
    
    return sum
};
*/

// ANSWER
function countCharacters(words: string[], chars: string): number {
  let total = 0
  for (let word of words) {
    let map = createMap(chars)
    if (isWordGood(word, map)) {
      total += word.length
    }
  }

  return total
}

var createMap = function (chars: string): { [key: string]: number } {
  let map: { [key: string]: number } = {}
  for (let i = 0; i < chars.length; i++) {
    if (!map[chars[i]]) {
      map[chars[i]] = 0
    }
    map[chars[i]]++
  }

  return map
}

var isWordGood = function (word: string, map: { [key: string]: number }) {
  for (let i = 0; i < word.length; i++) {
    if (!map[word[i]] || map[word[i]] == 0) {
      return false
    }
    map[word[i]]--
  }

  return true
}
