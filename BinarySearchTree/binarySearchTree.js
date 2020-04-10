class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(val) {
    const newNode = new Node(val);
    if (this.root === null) {
      this.root = newNode;
      return this;
    }
    let currentNode = this.root;

    while (true) {
      if (val === currentNode.val) return undefined;
      if (val < currentNode.val) {
        if (currentNode.left === null) {
          currentNode.left = newNode;
          return this;
        } else {
          currentNode = currentNode.left;
        }
      } else if (val > currentNode.val) {
        if (currentNode.right === null) {
          currentNode.right = newNode;
          return this;
        } else {
          currentNode = currentNode.right;
        }
      }
    }
  }

  find(val) {
    if (this.root === null) return null;
    let currentNode = this.root;
    let found = false;
    while (currentNode && !found) {
      if (val === currentNode.val) found = true;
      else if (val < currentNode.val) currentNode = currentNode.left;
      else if (val > currentNode.val) currentNode = currentNode.right;
    }
    if (!found) return null;
    return currentNode;
  }

  BFS() {
    let node = this.root;
    const queue = [];
    const visited = [];

    queue.push(node);

    while (queue.length) {
      node = queue.shift();
      visited.push(node);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }

    return visited;
  }

  DFSPreOrder() {
    const results = [];
    let current = this.root;

    function traverse(node) {
      if (node === null) return;
      results.push(node.val);
      traverse(node.left); // or if (node.left) traverse(node.left);
      traverse(node.right); // or if (node.right) traverse(node.right);
    }
    traverse(current);
    return results;
  }

  DFSPostOrder() {
    const results = [];
    let current = this.root;

    function traverse(node) {
      if (node === null) return;
      traverse(node.left);
      traverse(node.right);
      results.push(node.val);
    }
    traverse(current);
    return results;
  }

  DFSInOrder() {
    const results = [];
    let current = this.root;

    function traverse(node) {
      if (node === null) return;
      traverse(node.left);
      results.push(node.val);
      traverse(node.right);
    }
    traverse(current);
    return results;
  }
}

const tree = new BinarySearchTree();
console.log('insert', tree.insert(10));
console.log('insert', tree.insert(6));
console.log('insert', tree.insert(15));
console.log('insert', tree.insert(3));
console.log('insert', tree.insert(8));
console.log('insert', tree.insert(20));
console.log('find', tree.find(7));
console.log('BFS', tree.BFS());
console.log('DFSPreOrder', tree.DFSPreOrder());
console.log('DFSPostOrder', tree.DFSPostOrder());
console.log('DFSInOrder', tree.DFSInOrder());
