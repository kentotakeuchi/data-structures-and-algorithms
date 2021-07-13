// https://leetcode.com/problems/two-sum-iv-input-is-a-bst/

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
function findTarget(root: TreeNode | null, k: number): boolean {
    if(!root) return false
    
    const arr = [root]
    const nums = []
    
    while(arr.length) {
        const node = arr.shift()
        
        if(node.left) {
            arr.unshift(node.left)
        }
        if(node.right) {
            arr.push(node.right)
        }
    }
    console.log({nums})
    
    return false
};
*/

// MINE: recursive
/*
function findTarget(root: TreeNode | null, k: number): boolean {  
    const nums = []
    dfsPreorder(root)
    console.log({nums})
    
    let start = 0
    let end = nums.length-1
    while(start < end) {
        const sum = nums[start] + nums[end]
        
        if(sum === k) return true
        else if(sum < k) ++start
        else if(sum > k) --end
    }
    
    return false
    
    function dfsPreorder(node: TreeNode | null) {
        if(!node) return
        
        if(node.left) dfsPreorder(node.left)
        nums.push(node.val)
        if(node.right) dfsPreorder(node.right)
    }
}
*/

// ANSWER: dfs + set
function findTarget(root: TreeNode | null, k: number): boolean {
  if (!root) return false
  const set = new Set()
  const stack = [root]
  while (stack.length) {
    const node: any = stack.pop()
    if (set.has(k - node.val)) return true
    set.add(node.val)
    if (node.right) stack.push(node.right)
    if (node.left) stack.push(node.left)
  }
  return false
}
