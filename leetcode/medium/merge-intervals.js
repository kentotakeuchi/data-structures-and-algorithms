// https://leetcode.com/problems/merge-intervals/

/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */

// MINE..
// var merge = function(intervals) {
//     // declare results[]
//     // loop over
//         // find overlap if(intervals[i][1] >= intervals[i+1][0])
//             // if so -> merge
//     // return results

//     if(intervals.length === 1) return intervals;

//     const results = [];

//     for(let i=0; i<intervals.length; i++) {
//         if(i === intervals.length-1) {
//             console.log({i})
//             results.push(intervals[i])
//             return results;
//         };

//         if(intervals[i][1] >= intervals[i+1][0]) {
//             if(intervals[i][0] > intervals[i+1][0]) {
//                 results.push(intervals[i+1])
//                 i++
//             } else {
//                 results.push([intervals[i][0], intervals[i+1][1]])
//                 i++;
//             }
//         } else {
//             results.push(intervals[i])
//         }
//     }

//     return results;
// };

// ANSWER
const merge = (intervals) => {
  if (!intervals.length) return intervals;
  intervals.sort((a, b) => (a[0] !== b[0] ? a[0] - b[0] : a[1] - b[1]));
  var prev = intervals[0];
  var res = [prev];
  for (var curr of intervals) {
    if (curr[0] <= prev[1]) {
      prev[1] = Math.max(prev[1], curr[1]);
    } else {
      res.push(curr);
      prev = curr;
    }
  }
  return res;
};
