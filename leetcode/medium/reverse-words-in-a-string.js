// https://leetcode.com/problems/reverse-words-in-a-string/

/**
 * @param {string} s
 * @return {string}
 */

// MINE
// var reverseWords = function(s) {
//     // find multipe spaces
//     const re = /  +/g

//     // remove leading and trailing spaces ->
//     // replace multiple spaces with single space ->
//     // string -> array
//     const arr = s.trim().replace(re, ' ').split(' ')

//     let start = 0
//     let end = arr.length - 1

//     while(start <= end) {
//         [arr[start], arr[end]] = [arr[end], arr[start]]
//         ++start
//         --end
//     }

//     return arr.join(' ')
// };

// function swap(arr, x1, x2) {
//     [arr[x1], arr[x2]] = [arr[x2], arr[x1]]
// }

// ANSWER
const reverseWords = (s) => s.trim().split(/\s+/).reverse().join(' ');
