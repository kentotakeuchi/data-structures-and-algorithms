// https://leetcode.com/problems/n-ary-tree-preorder-traversal/

/**
 * Definition for node.
 * class Node {
 *     val: number
 *     children: Node[]
 *     constructor(val?: number) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.children = []
 *     }
 * }
 */

// MINE: iterative
/*
function preorder(root: Node | null): number[] {
    if(!root) return []
    
    const arr = [root]
    const results = []
    
    while(arr.length) {
        const node = arr.shift()
        results.push(node.val)
        arr.unshift(...node.children)
    }
    
    return results
};
*/

// MINE: recursive..
/*
function preorder(root: Node | null, results: number[] = []): number[] {
    if(!root) return results
    preorder(root.children, [root.val, ...results])
};
*/

// ANSWER: recursive
/*
function preorder(root: Node | null, ans: number[] = []): number[] {
    if (!root) return ans
    ans.push(root.val)
    for (let child of root.children)
        preorder(child, ans)
    return ans
}
*/

// ANSWER: iterative
function preorder(root: Node | null): number[] {
  const stack: any[] = []
  const result: number[] = []
  if (!root) {
    return result
  }
  stack.push(root)
  while (stack.length) {
    const node = stack.pop()
    result.push(node.val)
    for (let i = node.children.length - 1; i >= 0; i--) {
      stack.push(node.children[i])
    }
  }
  return result
}
