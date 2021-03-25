// https://www.rallycoding.com/problems/249

// MINE: brute force..
const solve = strArray => {
  for (let i = 0; i < strArray.length - 1; ++i) {
    for (let j = i + 1; j < strArray.length; ++j) {
      if (isAnagram(strArray[i], strArray[j])) return true
    }
  }

  return false
}

function isAnagram(word1, word2) {
  if (word1.length !== word2.length) return false

  const map1 = new Map()
  for (let char of word1) {
    map1.has(char) ? map1.set(char, map1.get(char) + 1) : map1.set(char, 1)
  }

  const map2 = new Map()
  for (let char of word2) {
    map2.has(char) ? map2.set(char, map2.get(char) + 1) : map2.set(char, 1)
  }

  for (let [key, val] of map1) {
    if (val !== map2.get(key)) return false
  }

  return true
}
