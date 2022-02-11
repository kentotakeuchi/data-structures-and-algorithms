// https://leetcode.com/problems/reformat-phone-number/

// MINE
/*
function reformatNumber(number: string): string {
    let d = number.replace(/\D/g, '')
    let i = 0
    let ans = ''
    
    if(d.length === 2) return d
    if(d.length === 4) return d.substring(i, i+2) + '-' + d.substring(i+2)
    ans += d.substring(0, 3)
    i = 3
    
    while(i < d.length) {
        if(d.length - i === 2) {
            ans += `-${d.substring(i, i+2)}`
            i += 2
        } else if(d.length - i === 4) {
            ans += '-' + d.substring(i, i+2) + '-' + d.substring(i+2, i+4)
            i += 4
        } else {
            ans += `-${d.substring(i, i+3)}`
            i += 3
        }
    }
    
    return ans
};
*/

// ANSWER: recursive
function reformatNumber(number: string): string {
  // recursive function to add dashes, needs a string without dashes as input
  var recursiveReformatNumber = function (number: string): string {
    if (number.length <= 3) {
      return number
    }
    // if length of the string is 4, splt it in two, separated by a dash
    if (number.length == 4) {
      return number.substring(0, 2) + '-' + number.substring(2, 4)
    }
    // take the first three digits add a dash then start the function over with the rest
    else {
      return (
        number.substring(0, 3) + '-' + recursiveReformatNumber(number.substring(3, number.length))
      )
    }
  }

  // remove all non-numbers (dashes, and spaces)
  return recursiveReformatNumber(number.replace(/\D/g, ''))
}
