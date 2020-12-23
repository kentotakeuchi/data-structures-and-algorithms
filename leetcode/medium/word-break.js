// https://leetcode.com/problems/word-break/

/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */

// MINE..
// var wordBreak = function(s, wordDict) {
//     // iterate
//         // find word
//         // remove the word
//         // iterate of s - removed word
//             // find word
// };

// ANSWER: BFS
// const wordBreak = (s, wordDict) => {
//   if (wordDict == null || wordDict.length === 0) return false;
//   const set = new Set(wordDict);
//     console.log({set}) // // { set: Set(2) { 'leet', 'code' } }

// When s = 'catsandog', wordDict = ['cats', 'ca', 'ts']
// After 'cats' and 'ca', it will become 'andog', 'tsandog'
// For 'tsandog', after 'ts', it will become 'andog' again, visited set here is for memoization
//   const visited = new Set();
//   const q = [0];

//   while (q.length) {
//     console.log({visited}) // { visited: Set(0) {} }
//     console.log({q}) // { q: [ 0 ] }

//     const start = q.shift();

//     console.log({start}) // { start: 0 }

//     if (!visited.has(start)) {
//       for (let end = start + 1; end <= s.length; end++) {
//         if (set.has(s.slice(start, end))) {
//           if (end === s.length) return true;
//           q.push(end);
//         }
//       }
//       visited.add(start);
//     }
//   }
//   return false;
// };

// ANSWER: DP
const wordBreak = (s, wordDict) => {
  if (wordDict == null || wordDict.length === 0) return false;

  const set = new Set(wordDict);
  const dp = Array(s.length + 1).fill(false);
  dp[0] = true;

  for (let end = 1; end <= s.length; end++) {
    for (let start = 0; start < end; start++) {
      const w = s.slice(start, end);
      if (dp[start] === true && set.has(w)) {
        dp[end] = true;
        break;
      }
    }
  }
  return dp[s.length];
};
