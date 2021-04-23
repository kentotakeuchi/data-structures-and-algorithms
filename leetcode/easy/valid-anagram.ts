// https://leetcode.com/problems/valid-anagram/

// MINE: sort
/*
function isAnagram(s: string, t: string): boolean {
    if(s.length !== t.length) return false
    return s.split('').sort().join('') === t.split('').sort().join('')
};
*/

// MINE: hash map
function isAnagram(s: string, t: string): boolean {
  if (s.length !== t.length) return false

  const mapS = buildMap(s)
  const mapT = buildMap(t)

  for (let [key, val] of mapS) {
    if (val !== mapT.get(key)) return false
  }

  return true
}

function buildMap(str: string): Map<string, number> {
  const map = new Map()

  for (let char of str) {
    map.has(char) ? map.set(char, map.get(char) + 1) : map.set(char, 1)
  }

  return map
}

// ANSWER: hash map
/*
var isAnagram = function (s: string, t: string): boolean {
  if (s.length !== t.length) return false
  const map: { [key: string]: number } = {}

  for (let i = 0; i < s.length; i++) {
    map[s[i]] ? map[s[i]]++ : (map[s[i]] = 1)
  }

  for (let i = 0; i < t.length; i++) {
    if (map[t[i]]) map[t[i]]--
    else return false
  }

  return true
}
*/
