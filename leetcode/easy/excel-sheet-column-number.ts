// https://leetcode.com/problems/excel-sheet-column-number/

// MINE
/*
function titleToNumber(str: string): number {
    // base case
    if(str.length === 1) {
        return str.charCodeAt(0) - 64
    }
    
    let result = 0
    
    for(let i=str.length-1; 0<=i; --i) {
        const isEven = i % 2 === 0
        
        if(isEven) {
            result += str.charCodeAt(i) - 64
            console.log({result}, str.charCodeAt(i)-64)
        } else {
            result += str.charCodeAt(i) - 64 + 25
            console.log({result}, str.charCodeAt(i)-64)
        }
        
    }
    
    return result
};
*/

// ANSWER
var titleToNumber = function (s: string): number {
  let columnNumber = 0
  for (let i = 0; i < s.length; i++) {
    // get the last ith character
    let char = s[s.length - 1 - i]

    // subtracting from 64 (not 65, ascii of A) to get the value directly
    // instead of ascii index
    // ex: A = 1 (65 - 64 = 1)
    columnNumber += Math.pow(26, i) * (char.charCodeAt(0) - 64)
  }
  return columnNumber
}
