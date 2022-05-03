// https://leetcode.com/problems/count-common-words-with-one-occurrence/

// MINE: 2 maps
/*
function countWords(words1: string[], words2: string[]): number {
    const map1 = new Map(), map2 = new Map()
    let ans = 0
    for(let w of words1) map1.set(w, map1.get(w)+1 || 1)
    for(let w of words2) map2.set(w, map2.get(w)+1 || 1)
    for(let [k, v] of map1) if(v === 1 && map2.get(k) === 1) ++ans
    return ans
};
*/

// ANSWER: single map
function countWords(words1: string[], words2: string[]): number {
  const map = new Map()
  let ans = 0
  for (let w of words1) map.set(w, map.get(w) + 1 || 1)
  for (let w of words2) if (map.has(w) && map.get(w) < 2) map.set(w, map.get(w) - 1)
  for (let [_, v] of map) if (v === 0) ++ans
  return ans
}
