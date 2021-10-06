// https://leetcode.com/problems/remove-outermost-parentheses/

// MINE..
/*
function removeOuterParentheses(s: string): string {

};
*/

// ANSWER
function removeOuterParentheses(S: string): string {
  let s = ''
  let opened = 0

  for (let c of S) {
    if (c === '(' && opened++ > 0) s += c
    if (c === ')' && opened-- > 1) s += c
  }

  return s
}
