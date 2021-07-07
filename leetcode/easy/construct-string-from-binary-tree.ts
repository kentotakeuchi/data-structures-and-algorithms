// https://leetcode.com/problems/construct-string-from-binary-tree/

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

// MINE..
/*
function tree2str(root: TreeNode | null): string {
    if(!root) return ''
    
    const arr = [root]
    let result = ''
    
    while(arr.length) {
        const node = arr.shift()
        result += node.val
        
        if(node.left) {
            
        }
    }
};
*/

// ANSWER: recursive
/*
function tree2str(t: TreeNode | null): string {
    if (!t) return '';

    const left = tree2str(t.left);
    const right = tree2str(t.right);
    
    // omit printing empty right node in the string
    if (right) return `${t.val}(${left})(${right})`;
    else if (left) return `${t.val}(${left})`;
    else return `${t.val}`;
};
*/

// ANSWER: iterative
function tree2str(t: TreeNode | null): string {
  if (!t) return ''

  const stack = [t]
  const visited = new Set()
  let s = ''

  while (stack.length) {
    t = stack[stack.length - 1]

    if (visited.has(t)) {
      stack.pop()
      s = `${s})`
    } else {
      visited.add(t)
      s = `${s}(${t.val}`

      if (!t.left && t.right) {
        s = `${s}()`
      }
      if (t.right) {
        stack.push(t.right)
      }
      if (t.left) {
        stack.push(t.left)
      }
    }
  }

  return s.substring(1, s.length - 1)
}
