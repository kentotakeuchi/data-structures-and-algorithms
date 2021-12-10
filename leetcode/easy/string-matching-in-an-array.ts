// https://leetcode.com/problems/string-matching-in-an-array/

// MINE: brute force
/*
function stringMatching(words: string[]): string[] {
    words.sort((a, z) => z.length - a.length)
    const ans = new Set<string>()
    
    for(let i=0; i<words.length-1; ++i) {
        for(let j=i+1; j<words.length; ++j) {
            words[i].includes(words[j]) && ans.add(words[j])
        }
    }
    
    return [...ans]
};
*/

// ANSWER: trie
function stringMatching(words: string[]): string[] {
  //========= Trie Class

  class Node {
    public children: { [key: string]: Node }
    public count: number

    constructor() {
      this.children = {}
      this.count = 0
    }
  }

  class Trie {
    public root: Node
    constructor() {
      this.root = new Node()
    }

    add(word: string): void {
      let node = this.root
      for (let char of word) {
        if (!node.children[char]) node.children[char] = new Node()
        node.children[char].count++
        node = node.children[char]
      }
    }

    get(word: string): boolean {
      let node = this.root
      for (let char of word) node = node.children[char]
      // if more than one word passes through the given word's path return true
      return node.count > 1
    }
  }
  //======================

  const trie = new Trie()
  const result = []

  for (let word of words) {
    // add every suffix of the word to the trie
    for (let i = 0; i < word.length; i++) {
      trie.add(word.slice(i))
    }
  }

  for (let word of words) {
    // if more than 1 word passes along this word's path, it means...
    // this word is a substring of one of the other words
    if (trie.get(word)) result.push(word)
  }
  return result
}
