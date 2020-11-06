// https://leetcode.com/problems/insert-interval/

/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */

// MINE..
// var insert = function(intervals, newInterval) {
//     if(intervals.length === 0) return [...newIntervals];

//     let prev = intervals[0];
//     const results = [prev];
//     let max = 0;
//     for(let [i, cur] of intervals.entries()) {
//         if(max >= intervals[i+1][0] && max <= cur[1] && cur[1] >= newInterval[0]) {
//             cur[1] = Math.max(cur[1], newInterval[1]);
//             max = cur[1]
//         } else {
//             results.push(cur);
//         }
//         console.log({results})
//     }

//     return results;
// };

// ANSWER
var insert = function (intervals, newInterval) {
  if (intervals.length === 0) {
    return [newInterval];
  }

  const result = [];
  let flag = 0;
  let i;

  for (i = 0; i < intervals.length; i++) {
    const interval = intervals[i];
    if (newInterval[0] > interval[1]) {
      result.push(interval);
    } else if (newInterval[1] < interval[0]) {
      result.push(newInterval);
      flag = 1;
      break;
    } else {
      newInterval[0] = Math.min(newInterval[0], interval[0]);
      newInterval[1] = Math.max(newInterval[1], interval[1]);
    }
  }

  if (flag === 0) {
    result.push(newInterval);
    return result;
  } else {
    return result.concat(intervals.splice(i));
  }
};
