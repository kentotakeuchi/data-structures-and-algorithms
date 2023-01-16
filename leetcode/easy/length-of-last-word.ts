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
// var lengthOfLastWord = function (s) {
//   return s.trim().split(' ').pop().length
// }

// try2 ///
// function lengthOfLastWord(s: string): number {
//     let ans = 0, flag = false
//     for(let i=s.length-1; i>=0; --i) {
//         if(flag && s[i] === ' ') break
//         if(s[i] !== ' ') {
//             ++ans
//             flag = true
//         }
//     }
//     return ans
// };

function lengthOfLastWord(s: string): number {
  return s.trim().split(' ').pop()!.length
}
