/**
 *
 * @param {string} str
 * @returns {string}
 */

// MINE
function reverse(str) {
  if (str.length === 1) return str[0]
  return str.slice(-1) + reverse(str.slice(0, str.length - 1))
}

// ANSWER
function reverse(str) {
  if (str.length <= 1) return str
  return reverse(str.slice(1)) + str[0]
}

console.log(reverse('awesome')) // 'emosewa'
console.log(reverse('rithmschool')) // 'loohcsmhtir'
