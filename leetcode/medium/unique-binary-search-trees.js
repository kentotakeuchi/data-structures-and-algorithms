// https://leetcode.com/problems/unique-binary-search-trees/

/**
 * @param {number} n
 * @return {number}
 */

// MINE
// var numTrees = function(n) {
//     if(n === 1) return 1;

//     let result = 0;

//     for(let i=1; i<=n; i++) {

//     }

//     return result;
// };

// class Node {
//     constructor(data) {
//         this.data = data;
//         this.left = null;
//         this.right = null;
//     }
// }

// ANSWER: DYNAMIC PROGRAMMING
var numTrees = function (n) {
  let G = new Array(n + 1).fill(0);
  G[0] = 1;
  G[1] = 1;
  for (let i = 2; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      G[i] += G[j - 1] * G[i - j];
    }
  }
  return G[n];
};
