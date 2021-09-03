// https://leetcode.com/problems/uncommon-words-from-two-sentences/

// MINE.. maybe wrong approach..
/*
function uncommonFromSentences(s1: string, s2: string): string[] {
  const set1 = new Set(s1.split(' '))
  const set2 = new Set(s2.split(' '))
  return [...symmetricDifference(set1, set2)]
    
  function keepUnique(set: Set<string>): Set<string> {
      
  }

  function symmetricDifference(setA: Set<string>, setB: Set<string>): Set<string> {
      let _difference = new Set(setA)
      for (let elem of setB) {
          if (_difference.has(elem)) {
              _difference.delete(elem)
          } else {
              _difference.add(elem)
          }
      }
      return _difference
  }
};
*/

// MINE: map
function uncommonFromSentences(s1: string, s2: string): string[] {
  const map: Map<string, number> = new Map()
  const results: string[] = []
  const concat = [...s1.split(' '), ...s2.split(' ')]
  for (let word of concat) {
    map.set(word, map.get(word) + 1 || 1)
  }
  for (let [key, val] of map) {
    if (val > 1) map.delete(key)
    else results.push(key)
  }
  return results
}

// ANSWER
