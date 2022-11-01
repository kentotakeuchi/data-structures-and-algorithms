// https://leetcode.com/problems/palindrome-number/

// MINE
// function isPalindrome(x: number): boolean {
//     // reverse: use toString()..
//     // const reversedStr = x.toString().split('').reduce((acc, cur) => cur + acc, '')
//     // return reversedStr === x.toString()

//     // ...
//     if(Math.sign(x) < 0) return fasle
//     // how to know the number of each digit?
// };

// ANSWER
// var isPalindrome = function (x) {
//   if (x < 0) return false;

//   let rev = 0;
//   for (let i = x; i >= 1; i = Math.floor(i / 10)) rev = rev * 10 + (i % 10);
//   return rev === x;
// };

// MINE
// function isPalindrome(x: number): boolean {
//     if(x < 0) return false
//     return x.toString() === x.toString().split('').reduce((acc, cur) => cur + acc, '')
// };

// ANSWER
function isPalindrome(x: number): boolean {
  if (x < 0 || (x !== 0 && x % 10 === 0)) return false

  let reversed = 0
  while (reversed < x) {
    reversed = reversed * 10 + (x % 10)
    x = Math.floor(x / 10)
  }

  return x === reversed || x === Math.floor(reversed / 10)
}
