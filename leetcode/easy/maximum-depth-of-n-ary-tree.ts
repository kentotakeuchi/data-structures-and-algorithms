// https://leetcode.com/problems/maximum-depth-of-n-ary-tree/

/**
 * Definition for Node.
 * class Node {
 *     val: number
 *     children: Node[]
 *     constructor(val?: number, children?: Node[]) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.children = (children===undefined ? [] : children)
 *     }
 * }
 */

// MINE..: iterative
/*
function maxDepth(root: Node): number {
    const arr = [root, 'end']
    let depth = 1
    
    while(2 <= arr.length) {
        const node = arr.shift()
        
        if(node === 'end') {
            arr.push(node)
            ++depth
            continue
        } else if(typeof node !== 'string' && !node) {
            arr.push(...node.children)
        }
    }
    
    return depth
};
*/

// ANSWER: recursion
/*
function maxDepth(root: Node): number {
    if (root == null) {
        return 0;
    }
    
    let max = 0;
    for (let child of root.children) {
        max = Math.max(max, maxDepth(child));
    }
    
    return max + 1;
};
*/

// ANSWER: recursion with helper fn
/*
function maxDepth(root: Node): number {
    if(!root) return 0;
    let max = -1;
    
    const helper = (node, depth) => {
        if(depth > max) max = depth;
        for(let c of node.children){
            helper(c, depth + 1);
        }
    }
    
    helper(root, 1)
    return max;
};
*/

// ANSWER: iteration
function maxDepth2(root: Node): number {
  if (!root) return 0
  // Note: it is not advised to use array as queue
  let queue = [],
    depthCount = 0
  queue.push(root)

  while (queue.length > 0) {
    let len = queue.length

    for (let i = 0; i < len; i++) {
      let node: any = queue.shift()
      for (let child of node.children) queue.push(child)
    }
    depthCount++
  }
  return depthCount
}
