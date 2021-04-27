// https://www.rallycoding.com/problems/225

/**
 *
 * @param {string} s1
 * @param {string} s2
 * @returns {boolean}
 */

// solve("nermitla", "terminal")

// MINE
const solve = (s1, s2) => {
  // base case
  if (s1.length !== s2.length) return false

  const arr1 = s1.split('')
  const arr2 = s2.split('')

  for (let i = 0; i < arr1.length; ++i) {
    if (arr1[i] !== arr2[i]) {
      swap(
        arr1,
        i,
        arr2.findIndex(char => arr1[i] === char)
      )
    }
  }
  return arr1.join('') === arr2.join('')
}

function swap(arr, i, j) {
  ;[arr[i], arr[j]] = [arr[j], arr[i]]
}
