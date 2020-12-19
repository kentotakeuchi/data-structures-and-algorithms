// https://leetcode.com/problems/clone-graph/

/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */

// MINE..
// var cloneGraph = function(node) {
//     // how to traverse?
//         // point current node
//         // add all neighbors to this.neighbors
//         // move pointer to the neighbors node
//         // if current ponter is visited node --> how to set visited on node?
//             // stop loop

//     // base case
//     if(node.val === 0) return [];
//     if(node.neighbors.length === 0) return [[]];

//     let newNode = new Node(node.val, node.neighbors);
//     let startNode = newNode;
//     let curNode = startNode;
//     // traverse all node
//     while(curNode) {
//         // if(visited or not) {
//         //     return  startNode;
//         // }

//     }

// };

// ANSWER
var cloneGraph = function (node) {
  if (node === null) {
    return null;
  }

  const map = new Map();
  const clone = (root) => {
    if (!map.has(root.val)) {
      map.set(root.val, new Node(root.val));
      map.get(root.val).neighbors = root.neighbors.map(clone);
    }
    return map.get(root.val);
  };

  return clone(node);
};
