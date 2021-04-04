// https://leetcode.com/problems/excel-sheet-column-title/

// ascii code --> A:65, Z:90

// MINE
/*
function convertToTitle(columnNumber: number): string {
    if(columnNumber < 27) return String.fromCharCode(columnNumber)
    
    const str = columnNumber.toString()
    
     
};
*/

// ANSWER:
var convertToTitle = function (n: number): string {
  if (n == 0) return ''
  let result = ''
  while (n > 0) {
    let r = n % 26
    let d = parseInt((n / 26).toString()) // bad hack..
    if (r == 0) {
      r = 26
      d = d - 1
    }
    result += String.fromCharCode(64 + r)
    n = d
  }
  return result.split('').reverse().join('')
}
