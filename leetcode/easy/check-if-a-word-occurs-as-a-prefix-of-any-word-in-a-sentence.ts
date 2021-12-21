// https://leetcode.com/problems/check-if-a-word-occurs-as-a-prefix-of-any-word-in-a-sentence/

// MINE: regex and startWith
/*
function isPrefixOfWord(sentence: string, searchWord: string): number {
    // const re = new RegExp(`^${searchWord}`)
    const words = sentence.split(' ')

    for(let i=0; i<words.length; ++i) {
        // if(re.test(words[i])) return ++i
        if(words[i].startsWith(searchWord)) return ++i
    }
    
    return -1
};
*/

// ANSWER: no built-in func
function isPrefixOfWord(sentence: string, searchWord: string): number {
  for (let i = 0, j = 1, word = ''; i < sentence.length; ++i) {
    if (sentence[i] === ' ') { ++j; word = ''; continue; }
    word += sentence[i];
    if (word === searchWord) return j;
  }
  return -1;
};
