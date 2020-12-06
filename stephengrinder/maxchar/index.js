// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

// MINE
function maxChar(str) {
  const map = {};
  for (const char of str) {
    map[char] = map[char] ? map[char]++ : 1;
  }

  let max = 0;
  let result;
  for (const key in map) {
    if (map[key] > max) {
      result = key;
      max = map[key];
    }
  }

  return result;
}

// ANSWER
// function maxChar(str) {
//   const obj = {};
//   for (const char of str) {
//     obj[char] = obj[char] ? ++obj[char] : 1;
//   }

//   let max = 0;
//   let maxChar = '';
//   for (const key in obj) {
//     if (max < obj[key]) {
//       (max = obj[key]), (maxChar = key);
//     }
//   }

//   return maxChar;
// }

module.exports = maxChar;
