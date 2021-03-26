// https://leetcode.com/problems/valid-palindrome/

// MINE
/*
function isPalindrome(s: string): boolean {
    return formatString(s) === formatString(s).split('').reverse().join('')
};

function formatString(str: string) {
    // MEMO: I want use \w regex for to allow alpha numeric but I don't want underscore _ to be part of it. Since _ is included in \w.
    return str.replace(/[\W^_]/g, '').toLowerCase()
}
*/

// ANSWER: non usage of built-in function
const validPalindrome = (input: string): boolean => {
  var start = 0
  var end = input.length - 1
  while (start < end) {
    var s = input.charCodeAt(start)
    var e = input.charCodeAt(end)

    if (!isLetter(s)) {
      start++
      continue
    }
    if (!isLetter(e)) {
      end--
      continue
    }

    if (toLowerCase(s) !== toLowerCase(e)) {
      return false
    }
    start++
    end--
  }
  return true
}

var isLetter = function (code: number) {
  if (
    (code >= 48 && code <= 57) || // numbers
    (code >= 65 && code <= 90) || // uppercase
    (code >= 97 && code <= 122)
  ) {
    // lowercase
    return true
  } else {
    return false
  }
}

var toLowerCase = function (code: number) {
  if (code >= 65 && code <= 90) {
    return code + 32
  } else {
    return code
  }
}
