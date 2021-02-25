// https://leetcode.com/problems/roman-to-integer/

// MINE
// function romanToInt(s: string): number {
//   const roman = {
//     I: 1,
//     V: 5,
//     X: 10,
//     L: 50,
//     C: 100,
//     D: 500,
//     M: 1000,
//   }

//   let sum = 0
//   for (let i = s.length - 1; i >= 0; i--) {
//     switch (s[i]) {
//       case 'V':
//       case 'X':
//         if (s[i - 1] === 'I') {
//           sum += roman[s[i]] - 1
//           --i
//         } else {
//           sum += roman[s[i]]
//         }
//         break
//       case 'L':
//       case 'C':
//         if (s[i - 1] === 'X') {
//           sum += roman[s[i]] - 10
//           --i
//         } else {
//           sum += roman[s[i]]
//         }
//         break
//       case 'D':
//       case 'M':
//         if (s[i - 1] === 'C') {
//           sum += roman[s[i]] - 100
//           --i
//         } else {
//           sum += roman[s[i]]
//         }
//         break
//       default:
//         sum += roman[s[i]] // 1
//         break
//     }
//   }

//   return sum
// }

// ANSWER
// const symbols = {
//     "I": 1,
//     "V": 5,
//     "X": 10,
//     "L": 50,
//     "C": 100,
//     "D": 500,
//     "M": 1000
// };

// var romanToInt = function(s: string): number {
//     let value = 0;
//     for(let i = 0; i < s.length; i+=1){
//         symbols[s[i]] < symbols[s[i+1]] ? value -= symbols[s[i]]: value += symbols[s[i]]
//     }
//     return value
// };

// ANOTHER ANSWER
var romanToInt = function (s: string): number {
  var map = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  var number = 0;
  var index;
  if (s.indexOf('CM') != -1) number -= 200;
  if (s.indexOf('CD') != -1) number -= 200;
  if (s.indexOf('XC') != -1) number -= 20;
  if (s.indexOf('XL') != -1) number -= 20;
  if (s.indexOf('IX') != -1) number -= 2;
  if (s.indexOf('IV') != -1) number -= 2;
  for (var i = 0; i < s.length; i++) {
    number += map[s[i]];
  }
  return number;
};
