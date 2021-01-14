// https://leetcode.com/problems/isomorphic-strings/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

// MINE..: misunderstood the question
// var isIsomorphic = function(s, t) {
//     // declare isSameS = false, isSameT = false
//     // iterate s, t at the same time
//         //set pointer at index 0
//         // compare current and previous each s, t
//         // if diff
//             // isSameS = false
//         // else if same
//             // isSameS = true
//         // if isSameS !== isSameT
//             // return false
//     // return true

//     let isSameS = false
//     let isSameT = false

//     for(let i=1; i<s.length; i++) {
//         if(s[i-1] === s[i]) isSameS = true
//         else isSameS = false

//         if(t[i-1] === t[i]) isSameT = true
//         else isSameT = false

//         if(isSameS !== isSameT) return false
//     }

//     return true
// };

// ANSWER
var isIsomorphic = function (s, t) {
  if (s.length != t.length) return false;
  let m = new Map();
  for (let i = 0; i < s.length; i++) {
    if (!m.has(s[i])) m.set(s[i], t[i]);
    else {
      if (m.get(s[i]) != t[i]) {
        return false;
      }
    }
  }
  return new Set([...m.values()]).size == m.size;
};
