// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

// MINE
function palindrome(str) {
  // return reverseFunc(str);
  return twoPointer(str);
}

function reverseFunc(str) {
  return str === str.split('').reverse().join('');
}

function twoPointer(str) {
  let start = 0;
  let end = str.length - 1;

  while (start <= end) {
    if (str[start] !== str[end]) {
      return false;
    }
    ++start;
    --end;
  }

  return true;
}

// ANSWER
// function palindrome(str) {
//   return str.split('').every((char, i) => {
//     return char === str[str.length - i - 1];
//   });
// }

// function palindrome(str) {
//   const reversed = str.split('').reduce((acc, cur) => cur + acc, '');
//   return str === reversed;
// }

module.exports = palindrome;
