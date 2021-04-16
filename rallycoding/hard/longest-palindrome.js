// https://www.rallycoding.com/problems/166

// MINE..
/*
const solve = (str) => {
  let start = 0
  let end = str.length
    
  while(start <= end) {    
    console.log({start, end})
    console.log(str.substring(start, end), str.substring(start, end-1), str.substring(start+1, end))
    if(isPalindrome(str.substring(start, end))) return str.substring(start, end)
  }
  
  return false;
};

function isPalindrome(str) {
  // first letter != last letter --> not palindrome
  if(str[0] !== str[str.length-1]) return false
  return str === str.split('').reduce((acc, cur) => cur + acc, '')
}
*/

// SOMEONE
function palindrome(str) {
  let mid = Math.round(str.length / 2)
  for (let i = 0; i <= mid; i++) {
    if (str[i] !== str[str.length - 1 - i]) {
      return false
    }
  }
  return true
}

function solve(str) {
  let range = str.length
  let substring = ''
  // each iteration will decrement length by 1
  while (range > 0) {
    // check for palindromes within current range
    for (let i = 0; i <= str.length - range; i++) {
      substring = str.substring(i, range + 1)
      if (palindrome(substring)) return substring
    }
    range--
  }
}
