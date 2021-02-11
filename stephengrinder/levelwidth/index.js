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

// MINE..
function levelWidth(root) {
  if (!root) return;
  let count = 0;
  const results = [];
  const q = [root, 'end'];
  while (q.length > 1) {
    const node = q.shift();
    if (node === 'end') {
      results.push(count);
      count = 0;
      q.push('end');
      continue;
    }
    count++;
    q.push(...node.children);
  }
  console.log({ results });
  return results;
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

module.exports = levelWidth;
