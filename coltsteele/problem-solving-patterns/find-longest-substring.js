/**
 *
 * @param {string} s
 * @returns {number}
 */

// MINE..
function findLongestSubstring(s) {
  if (!s.length) return 0

  let substr = s[0]
  let i = 0
  let j = 1

  while (j < s.length) {
    if (s[i] === s[j]) {
      ++i
      j = i + 1
    }
  }

  return substr.length
}

// ANSWER: findLongestSubstring Solution
// function findLongestSubstring(str) {
//   let longest = 0;
//   let seen = {};
//   let start = 0;

//   for (let i = 0; i < str.length; i++) {
//     let char = str[i];
//     if (seen[char]) {
//       start = Math.max(start, seen[char]);
//     }
//     // index - beginning of substring + 1 (to include current in count)
//     longest = Math.max(longest, i - start + 1);
//     // store the index of the next char so as to not double count
//     seen[char] = i + 1;
//   }
//   return longest;
// }
