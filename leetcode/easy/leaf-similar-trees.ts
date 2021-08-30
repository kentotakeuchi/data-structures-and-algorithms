// https://leetcode.com/problems/leaf-similar-trees/

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
function leafSimilar(root1: TreeNode | null, root2: TreeNode | null): boolean {
    return sumOfLeaves(root1, 0) === sumOfLeaves(root2, 0)
    
    function sumOfLeaves(node: TreeNode | null, sum: number): number {
        if(node) {
            if(!node.left && !node.right) {
                console.log('leave')
                sum += node.val
            }
            sumOfLeaves(node.left, sum)
            sumOfLeaves(node.right, sum)
            console.log({sum})
            return sum
        }
    }
};
*/

// ANSWER
function leafSimilar(root1: TreeNode | null, root2: TreeNode | null): boolean {
  const s1 = [],
    s2 = []
  s1.push(root1)
  s2.push(root2)
  while (s1.length && s2.length) if (dfs(s1) != dfs(s2)) return false
  return !s1.length && !s2.length
}

function dfs(s: (TreeNode | null)[]): number | undefined {
  while (true) {
    const node = s.pop()
    if (node?.right != null) s.push(node.right)
    if (node?.left != null) s.push(node.left)
    if (node?.left == null && node?.right == null) return node?.val
  }
}
