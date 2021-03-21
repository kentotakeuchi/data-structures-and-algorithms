// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

const Node = require('./node')

/**
 *
 * @param {(Node|string)} root
 * @return {number[]}
 */

// MINE..
function levelWidth(root) {
  if (!root) return []
  const arr = [root, 'end']
  let results = []
  let count = 0
  while (1 < arr.length) {
    let node = arr.shift()

    if (node === 'end') {
      results.push(count)
      arr.push(node)
      count = 0
      continue
    }

    arr.push(...node.children)
    ++count
  }
  console.log({ count, results, arr })
  results.push(count)
  return results
}

// ANSWER
// function levelWidth(root) {
//   if (!root) return [];
//   const arr = [root, 's'];
//   const counts = [0];
//   while (arr.length > 1) {
//     const node = arr.shift();

//     if (node === 's') {
//       counts.push(0);
//       arr.push(node);
//     } else {
//       arr.push(...node.children);
//       counts[counts.length - 1]++;
//     }
//   }
//   return counts;
// }

module.exports = levelWidth
