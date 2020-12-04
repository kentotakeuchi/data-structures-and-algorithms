// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// MINE
function reverse(str) {
  let reversed = '';
  for (const char of str) {
    reversed = char + reversed;
  }
  return reversed;
}

// ANSWER 1: FOR LOOP
// function reverse(str) {
//   let result = '';
//   for (let char of str) {
//     result = char + result;
//   }
//   return result;
// }

// ANSWER 2: REVERSE FUNC
// function reverse(str) {
//   return str
//     .split('')
//     .reverse()
//     .join('');
// }

// ANSWER 3: REDUCE FUNC
// function reverse(str) {
//   return str.split('').reduce((rev, char) => char + rev, '');
// }

module.exports = reverse;
