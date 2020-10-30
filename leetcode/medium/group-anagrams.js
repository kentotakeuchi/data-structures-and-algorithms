// https://leetcode.com/problems/group-anagrams/

/**
 * @param {string[]} strs
 * @return {string[][]}
 */

// MINE..: i should have solved by myself..
// var groupAnagrams = function(strs) {
//     const results = [];

//     if(strs.length === 1) {
//         results.push([strs[0]]);
//         return results;
//     }

//     let newStr = [];
//     for(let str of strs) {
//         newStr.push(str.split('').sort().join(''));
//     }
//     console.log({newStr})

//     for(let i=0; i<newStr.length; i++) {
//         const arr = [strs[i]];

//         for(let j=i+1; j<newStr.length; j++) {
//             if(newStr[i] === newStr[j]) {
//                 arr.push(strs[j])
//                 newStr.splice(j, 1);
//             }
//         }
//         results.push(arr);
//     }

//     return results;
// };

// ANSWER
const groupAnagrams = (strs) => {
  const mapping = {};
  for (let str of strs) {
    const sorted = str.split('').sort().join('');
    if (mapping[sorted] !== undefined) {
      mapping[sorted].push(str);
    } else {
      mapping[sorted] = [str];
    }
  }
  return Object.values(mapping);
};
