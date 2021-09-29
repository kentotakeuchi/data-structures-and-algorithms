// https://leetcode.com/problems/cousins-in-binary-tree/

/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

// MINE: iterative..
/*
function isCousins(root: TreeNode | null, x: number, y: number): boolean {
    if(!root) return false
    const q = [root, 'end']
    
    while(q.length >= 2) {
        const node = q.shift()
        
        if(node === 'end') {
            q.push(node)
        }
        
        
    }
};
*/

// ANSWER: iterative
function isCousins(root: TreeNode | null, x: number, y: number): boolean {
  if (!root) return false
  const queue = [root]

  while (queue.length) {
    const size = queue.length
    let foundX = false
    let foundY = false

    // iterate through one level
    for (let i = 0; i < size; i++) {
      const node = queue.shift()!
      // check if children are x and y
      if (node.left && node.right) {
        if (
          (node.left.val === x && node.right.val === y) ||
          (node.left.val === y && node.right.val === x)
        )
          return false
      }
      // find x and y at the same level
      if (node.val === x) foundX = true
      if (node.val === y) foundY = true
      if (node.left) queue.push(node.left)
      if (node.right) queue.push(node.right)
    }

    if (foundX && foundY) return true
  }

  return false
}

/**
 * A new ! post-fix expression operator may be used to assert that its operand is non-null and non-undefined in contexts where the type checker is unable to conclude that fact. Specifically, the operation x! produces a value of the type of x with null and undefined excluded. Similar to type assertions of the forms <T>x and x as T, the ! non-null assertion operator is simply removed in the emitted JavaScript code.
 */
