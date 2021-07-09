// https://leetcode.com/problems/average-of-levels-in-binary-tree/

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
function averageOfLevels(root: TreeNode | null): number[] {
    if(!root) return []
    
    const stack = [root]
    const results = [parseFloat(root.val.toFixed(5))]
    
    while(stack.length) {
        const node = stack.pop()
        let l = 0
        let r = 0
        
        if(node.right) {
            r = node.right.val
            stack.push(node.right)
        }
        if(node.left) {
            l = node.left.val
            stack.push(node.left)
        }
        
        if(l && r) results.push(parseFloat(((l+r)/2).toFixed(5)))
        else if(l || r) results.push(parseFloat((l || r).toFixed(5)))
        console.log({l, r, results})
    }
    console.log({results})
    
    return results
};
*/

// MINE: recursive
// function averageOfLevels(root: TreeNode | null): number[] {

// };

// ANSWER: bfs
/*
function averageOfLevels(root: TreeNode | null): number[] {
    let queue = [];
    let result = [];
    let sum = 0;
    let count = 0;
    let temp = [];
    queue.push(root);
    
    while(queue.length > 0 || temp.length > 0) {
        let node = queue.shift();
        
        sum += node.val;
        count++;
        if (node.left != null) {
            temp.push(node.left);
        }
        if (node.right != null) {
           temp.push(node.right); 
        }
        
        if(queue.length == 0) {
            result.push(sum/count);
            sum = 0;
            count = 0;
            queue = temp;
            temp = [];
        }
    }
    
    return result;
};
*/

// ANSWER: dfs
function averageOfLevels(root: TreeNode | null): number[] {
  // @ts-ignore
  let sums = []
  // @ts-ignore
  let counts = []
  // @ts-ignore
  doTraversal(root, 0, sums, counts)
  let results = []
  for (let i = 0; i < sums.length; i++) {
    // @ts-ignore
    results.push(sums[i] / counts[i])
  }
  return results
}

// @ts-ignore
const doTraversal = function (node, level, sums, counts) {
  if (node == null) {
    return
  }

  if (sums[level] == null) {
    sums[level] = 0
  }
  sums[level] += node.val

  if (counts[level] == null) {
    counts[level] = 0
  }
  counts[level]++

  doTraversal(node.left, level + 1, sums, counts)
  doTraversal(node.right, level + 1, sums, counts)
}
