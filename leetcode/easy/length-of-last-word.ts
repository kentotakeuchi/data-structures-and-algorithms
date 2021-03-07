// https://leetcode.com/problems/length-of-last-word/

// MINE
/*
function lengthOfLastWord(s: string): number {
    const arr = s.trim().split(' ')
    let last = arr[arr.length-1]
    // if(last === '') {
    //     return 0
    // }
    return last.length
};
*/

// ANSWER
var lengthOfLastWord = function (s) {
  return s.trim().split(' ').pop().length
}
