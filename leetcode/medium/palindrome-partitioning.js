// https://leetcode.com/problems/palindrome-partitioning/

/**
 * @param {string} s
 * @return {string[][]}
 */

// MINE
// var partition = function(s) {
//     const results = [];
//     for(let i=0; i<s.length; i++) {
//         const
//         for(let j=i+1; j<s.length: j++) {

//         }
//     }
//     return results;
// };

// ANSWER
var partition = function (s) {
  const output = [];
  const partitions = [];
  const isPalindrome = (str) => str === str.split('').reverse().join('');
  const findPalindrome = (str, start, parts, result) => {
    if (start === str.length) {
      result.push([...parts]);
      return;
    }

    for (let i = start + 1; i <= str.length; i++) {
      const target = str.substring(start, i);
      if (isPalindrome(target)) {
        parts.push(target);
        findPalindrome(str, i, parts, result);
        parts.pop();
      }
    }
  };
  /*
      string: 'aab'
      start = 0 will find palindrome in 'a', 'aa', 'aab'
      start = 1 will find palindrome in      'a',  'ab'
      start = 2 will find palindrome in            'b'
   */
  findPalindrome(s, 0, partitions, output);

  return output;
};
