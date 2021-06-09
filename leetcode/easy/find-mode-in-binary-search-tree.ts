// https://leetcode.com/problems/find-mode-in-binary-search-tree/

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

// MINE: iteration(super inefficient..)
/*
function findMode(root: TreeNode | null): number[] {
    if(!root.left && !root.right) return [root.val]
    
    const map = new Map()
    const arr = [root]
    
    while(arr.length) {
        const node = arr.shift()
        map.has(node.val) ? map.set(node.val, map.get(node.val)+1) : map.set(node.val, 1)
        if(node.left) {
            arr.unshift(node.left)
        }
        if(node.right) {
            arr.push(node.right)
        }
    }
    
    let max = 0
    for(let [key, val] of map) {
        if(max < val) max = val
    }
    
    const mode = []
    for(let [key, val] of map) {
        if(max === val) mode.push(key)
    }
    
    return mode
};

// MINE: recursive
function findMode(root: TreeNode | null): number[] {
    
}
*/

// ANSWER: recursive(inorder)
/*
function findMode(root: TreeNode | null): number[] {
    var mode = [], 
        curNodeVal = NaN, 
        curNodeCount = 0, 
        maxCount = -Infinity;
    
    var inorder = function(root) {
        if (!root) return;
        inorder(root.left);
        curNodeCount = (root.val === curNodeVal ? curNodeCount : 0) + 1;
        curNodeVal = root.val;
        if (curNodeCount > maxCount) {
            mode = [root.val];
            maxCount = curNodeCount;
        } else if (curNodeCount === maxCount) {
            mode.push(root.val);
        }
        inorder(root.right);
    }
    inorder(root);
    return mode;
}
*/

// ANSWER: iterative
function findMode(root: TreeNode | null): number[] {
  const output: number[] = []
  if (!root) return output
  const obj: { [key: string]: number } = {}
  const q = [root]
  let most = 0

  while (q.length) {
    const cur = q.shift()
    if (cur) {
      if (obj[cur.val]) {
        obj[cur.val] += 1
      } else {
        obj[cur.val] = 1
      }

      if (obj[cur.val] > most) most = obj[cur.val]
      if (cur.left) q.push(cur.left)
      if (cur.right) q.push(cur.right)
    }
  }

  for (let n in obj) {
    if (obj[n] === most) output.push(+n)
  }

  return output
}
