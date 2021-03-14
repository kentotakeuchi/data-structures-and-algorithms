// https://leetcode.com/problems/same-tree/

/**
 * Definition for a binary tree node.*/
class TreeNode {
  val: number
  left: TreeNode | null
  right: TreeNode | null
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val
    this.left = left === undefined ? null : left
    this.right = right === undefined ? null : right
  }
}

// MINE.. the approach is for tree, not binary tree..
/*
function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
    // base case
    if(!p && !q) return true
    if((p && !q) || (!p && q)) return false
    
    // queue
    const sP = [p]
    const sQ = [q]
    
    // traverse until either tree finishes traversing
    while(sP.length && sQ.length) {
        console.log({sP, sQ})
        const pNode = sP.shift()
        const qNode = sQ.shift()
        
        // if diff value, not same tree
        if(pNode.val !== qNode.val) return false
        
        // move to next node
        if(pNode.left) sP.unshift(pNode.left)
        if(qNode.left) sQ.unshift(qNode.left)
        if(pNode.right) sP.unshift(pNode.right)
        if(qNode.right) sQ.unshift(qNode.right)
    }
    
    // if either queue has node, the trees are not identical
    if(sP.length || sQ.length) return false
    
    return true
};
*/

// ANSWER: recursion
/*
function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
    // p and q are both null
    if (p == null && q == null) return true
    // one of p and q is null
    if (q == null || p == null) return false
    
    if (p.val != q.val) return false
    
    return isSameTree(p.right, q.right) && isSameTree(p.left, q.left)
}
*/

// ANSWER: iteration
function check(p: TreeNode | null | undefined, q: TreeNode | null | undefined) {
  // p and q are null
  if (p == null && q == null) return true
  // one of p and q is null
  if (q == null || p == null) return false
  if (p.val != q.val) return false
  return true
}

function isSameTree(p: TreeNode | null | undefined, q: TreeNode | null | undefined): boolean {
  if (p == null && q == null) return true
  if (!check(p, q)) return false

  // dequeue
  const deqP = [p]
  const deqQ = [q]

  while (deqP.length) {
    console.log({ deqP, deqQ })
    p = deqP.shift()
    q = deqQ.shift()

    if (!check(p, q)) return false

    if (p) {
      // left
      if (!check(p.left, q?.left)) return false
      if (p.left) {
        deqP.push(p.left)
        deqQ.push(q?.left)
      }
      // right
      if (!check(p.right, q?.right)) return false
      if (p.right) {
        deqP.push(p.right)
        deqQ.push(q?.right)
      }
    }
  }
  return true
}
