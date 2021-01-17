// https://leetcode.com/problems/implement-trie-prefix-tree/

// MINE
/**
 * Initialize your data structure here.
 */
// var Trie = function() {
//     this.data = []
// };

// /**
//  * Inserts a word into the trie.
//  * @param {string} word
//  * @return {void}
//  */
// Trie.prototype.insert = function(word) {
//     this.data.push(word)
// };

// /**
//  * Returns if the word is in the trie.
//  * @param {string} word
//  * @return {boolean}
//  */
// Trie.prototype.search = function(word) {
//     return this.data.includes(word)
// };

// /**
//  * Returns if there is any word in the trie that starts with the given prefix.
//  * @param {string} prefix
//  * @return {boolean}
//  */
// Trie.prototype.startsWith = function(prefix) {
//     for(let word of this.data) {
//         if(word.startsWith(prefix)) {
//             return true
//         }
//     }
//     return false
// };

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */

// ANSWER
class Trie {
  constructor() {
    this.root = {};
  }

  insert(word) {
    let node = this.root;
    for (let c of word) {
      if (node[c] == null) node[c] = {};
      node = node[c];
    }
    node.isWord = true;
  }

  traverse(word) {
    let node = this.root;
    for (let c of word) {
      node = node[c];
      if (node == null) return null;
    }
    return node;
  }

  search(word) {
    const node = this.traverse(word);
    return node != null && node.isWord === true;
  }

  startsWith(prefix) {
    return this.traverse(prefix) != null;
  }
}
