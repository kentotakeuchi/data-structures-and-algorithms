// https://leetcode.com/problems/n-ary-tree-postorder-traversal/

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

// MINE: iterative..
/*
function postorder(root: Node | null): number[] {
    if(!root) return []
    
    const arr = [...root.children, root]
    console.log({arr})
    const results = []
    
    while(arr.length) {
        const node = arr.shift()
        result
    }
    
    return results
};
*/

// MINE: recursive
// function postorder(root: Node | null): number[] {

// };

// ANSWER: iterative
/*
function postorder(root: Node | null): number[] {
    const res = [], stack = [root];
    while (stack.length) {
        const curr = stack.pop();
        if (!curr) continue;
        res.push(curr.val);
        stack.push(...curr.children);
    }
    return res.reverse();
};
*/

// ANSWER: recursive
function postorder(root: Node | null): number[] {
  const res: number[] = []
  traverse(root)
  return res

  function traverse(node: Node | null | any): void {
    if (!node) return
    for (let child of node.children) {
      traverse(child)
    }
    res.push(node.val)
  }
}
