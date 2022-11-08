// https://leetcode.com/problems/valid-parentheses/

// MINE..
// function isValid(s: string): boolean {

// };

// ANSWER: stack + mirror
// var isValid = function (s: string): boolean {
//   const stack = [];

//   for (let i = 0; i < s.length; i++) {
//     let c = s.charAt(i);
//     switch (c) {
//       case '(':
//         stack.push(')');
//         break;
//       case '[':
//         stack.push(']');
//         break;
//       case '{':
//         stack.push('}');
//         break;
//       default:
//         if (c !== stack.pop()) {
//           return false;
//         }
//     }
//   }

//   return stack.length === 0;
// };

// mine..
// function isValid(s: string): boolean {
//     const map = {
//         '(': true,
//         '{': true,
//         '[': true,
//     }
//     for(let c of s) {
//         if(c === '(' || c === '{' || c === '[') map[c] = false
//         else if(map['('] && c === ')' || map['{'] && c === '}' || map['['] && c === ']') map[c] = false
//         else if(c === ')') map['('] = true
//         else if(c === '}') map['{'] = true
//         else map['['] = true
//         console.log({map})
//     }
//     for(let k in map) {
//         if(!map[k]) return false
//     }
//     return true
// };

// ans: stack
function isValid(s: string): boolean {
  const stack = []
  for (let c of s) {
    switch (c) {
      case '(':
        stack.push(')')
        break
      case '{':
        stack.push('}')
        break
      case '[':
        stack.push(']')
        break
      default:
        if (c !== stack.pop()) return false
    }
  }
  return !stack.length
}
