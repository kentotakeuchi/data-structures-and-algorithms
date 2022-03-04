// https://leetcode.com/problems/check-if-one-string-swap-can-make-strings-equal/

// MINE
function areAlmostEqual(s1: string, s2: string): boolean {
  if (s1 === s2) return true

  const arr = []

  for (let i = 0; i < s1.length; ++i) {
    if (s1[i] !== s2[i]) arr.push([s1[i], s2[i]])
    if (arr.length > 2) return false
  }

  return arr.length === 2 && arr[0][0] === arr[1][1] && arr[0][1] === arr[1][0]
}

// ANSWER
