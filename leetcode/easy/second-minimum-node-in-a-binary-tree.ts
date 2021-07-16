// https://leetcode.com/problems/second-minimum-node-in-a-binary-tree/

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

// MINE: brute force > recursive
/*
function findSecondMinimumValue(root: TreeNode | null): number {
  if (!root) return -1
  const set: Set<number> = new Set()
  dfs(root, set)

  let min = root.val
  let result = Infinity
  for (let num of set) {
    console.log({ min, num, set })
    if (min < num && num < result) result = num
  }
  return result < Infinity ? result : -1

  function dfs(node: TreeNode | null, set: Set<number>) {
    if (!node) return
    set.add(node.val)
    dfs(node.left, set)
    dfs(node.right, set)
  }
}
*/

// ANSWER: ad-hoc
function findSecondMinimumValue(root: TreeNode | null): number {
  if (!root) return -1
  let min = root.val
  let result = Infinity
  dfs(root)
  return result < Infinity ? result : -1

  function dfs(node: TreeNode | null) {
    if (node) {
      if (min < node.val && node.val < result) {
        result = node.val
      } else if (min === node.val) {
        dfs(node.left)
        dfs(node.right)
      }
    }
  }
}
