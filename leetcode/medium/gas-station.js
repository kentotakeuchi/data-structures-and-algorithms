// https://leetcode.com/problems/gas-station/

/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */

// MINE..
// var canCompleteCircuit = function(gas, cost) {
//     let idxOfStartGs = -1;
//     let start = 0;

//     // check every start point
//     while(start < gas.length) {
//         // check each gas station
//         for(let i=start; i<gas.length; i++) {
//             let sum = 0;
//             if()
//         }

//         ++start;
//     }

//     return idxOfStartGs;
// };

// ANSWER
var canCompleteCircuit = function (gas, cost) {
  let curTank = 0,
    totalTank = 0,
    pos = 0;
  for (let i = 0; i < gas.length; i++) {
    curTank += gas[i] - cost[i];
    totalTank += gas[i] - cost[i];
    if (curTank < 0) {
      curTank = 0;
      pos = i + 1;
    }
  }
  return totalTank < 0 ? -1 : pos;
};
