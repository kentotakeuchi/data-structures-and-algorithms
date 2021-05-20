// https://www.udemy.com/course/js-algorithms-and-data-structures-masterclass/learn/quiz/4410604#announcements

/**
 *
 * @param {string} str1
 * @param {string} str2
 * @returns {boolean}
 */

// MINE
function validAnagram(str1, str2) {
  // base
  if (str1.length !== str2.length) return false

  const map1 = buildMap(str1)
  const map2 = buildMap(str2)

  for (let [key, val] of map1) {
    if (val !== map2.get(key)) return false
  }

  return true
}

/**
 *
 * @param {string} str
 * @returns {Map}
 */

function buildMap(str) {
  const map = new Map()

  for (let char of str) {
    if (map.has(char)) {
      map.set(char, map.get(char) + 1)
    } else {
      map.set(char, 1)
    }
  }

  return map
}

// ANSWER
function validAnagram(first, second) {
  if (first.length !== second.length) {
    return false
  }

  const lookup = {}

  for (let i = 0; i < first.length; i++) {
    let letter = first[i]
    // if letter exists, increment, otherwise set to 1
    lookup[letter] ? (lookup[letter] += 1) : (lookup[letter] = 1)
  }
  console.log(lookup)

  for (let i = 0; i < second.length; i++) {
    let letter = second[i]
    // can't find letter or letter is zero then it's not an anagram
    if (!lookup[letter]) {
      return false
    } else {
      lookup[letter] -= 1
    }
  }

  return true
}

// {a: 0, n: 0, g: 0, r: 0, m: 0,s:1}
validAnagram('anagrams', 'nagaramm')
