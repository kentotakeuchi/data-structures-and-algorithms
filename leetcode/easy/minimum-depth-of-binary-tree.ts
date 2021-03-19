// https://leetcode.com/problems/minimum-depth-of-binary-tree/

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

// MINE..: recursive, dfs
/*
function minDepth(root: TreeNode | null): number {
    // base case
    if(!root) return 0
    return DFS(root)
    
    function DFS(node: TreeNode | null): number {
        // base case
        if(!node) return 0
        
        const left = DFS(node.left)
        const right = DFS(node.right)
        
        return Math.min(left, right) + 1
    }
};
*/

// MINE..: iterative, dfs
/*
function minDepth(root: TreeNode | null): number {
    // base case
    if(!root) return 0
    
    // array to store nodes
    const arr = [root]
    // minimum depth of tree
    let min = Infinity
    
    // traverse all nodes on tree
    while(!arr.length) {
        // current depth
        let cur = 1
        
        // extract current node
        let node = arr.shift()
        
        if(!node.left) {
            
        }
        
        if(node.left) {
            arr.unshift(node.left)
        }
        if(node.right) {
            arr.unshift(node.right)
        }
        
        ++cur
    }
    
    return min
}
*/

// ANSWER: iterative, bfs, queue
/*
var minDepth = function(root) {
    if(!root) return 0;
    let depth = 1;
    let queue = [root];
    if(!root.left && !root.right) return depth;

    while(queue.length > 0 ){
      let queueLength = queue.length;

      for(let i = 0; i < queueLength; i++){
        let node = queue.shift();

        if(!node.left && !node.right) return depth;
        else{
          if(node.left) queue.push(node.left);
          if(node.right) queue.push(node.right);
        }
      }

      depth++;
    }

    return depth;
};
*/

// ANSWER: recursive, dfs
var minDepth = function (root: TreeNode | null) {
  if (!root) return 0

  let min = Infinity

  const dfs = (node: TreeNode | null, depth: number) => {
    if (!node?.left && !node?.right) {
      if (depth < min) {
        min = depth
      }
    }

    if (node?.left) {
      dfs(node?.left, depth + 1)
    }
    if (node?.right) {
      dfs(node?.right, depth + 1)
    }
  }

  dfs(root, 1)

  return min
}
