// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

// my solution
function maxChar(str) {
  const hash = {};
  for (let char of str.trim()) {
    hash[char] = hash[char] ? hash[char] + 1 : 1;
  }
  console.log({ hash });
  let max = 0;
  let answer = '';
  for (let key in hash) {
    if (hash[key] > max) {
      max = hash[key];
      answer = key;
    }
  }
  return answer;
}

module.exports = maxChar;
