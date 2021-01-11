// https://leetcode.com/problems/repeated-dna-sequences/

/**
 * @param {string} s
 * @return {string[]}
 */

// MINE
// var findRepeatedDnaSequences = function(s) {
//     if(s.length < 10) return []

// };

// ANSWER
var findRepeatedDnaSequences = function (s) {
  let curr = s.slice(0, 10);
  const seen = new Set([curr]);
  const res = new Set();

  for (let i = 10; i < s.length; i++) {
    curr = curr.slice(1) + s[i];
    if (seen.has(curr)) res.add(curr);
    seen.add(curr);
  }
  return [...res];
};
