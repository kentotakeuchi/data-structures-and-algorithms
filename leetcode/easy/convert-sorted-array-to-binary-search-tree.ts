// https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/

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

// MINE: dfs
/*
function sortedArrayToBST(nums: number[]): TreeNode | null {
    // base case
    if(nums.length === 1) return new TreeNode(nums[0])
    
    let mid = Math.floor(nums.length / 2)
    let root = new TreeNode(nums[mid])
    
    // how to find this.left and this.right?
};
*/

// ANSWER: recursive
function sortedArrayToBST(nums: number[]): TreeNode | null {
  if (nums == null || !nums.length) {
    return null
  }

  let mid = Math.floor(nums.length / 2)
  const node = new TreeNode(nums[mid])
  node.left = sortedArrayToBST(nums.slice(0, mid))
  node.right = sortedArrayToBST(nums.slice(mid + 1, nums.length))
  return node
}
