// https://leetcode.com/problems/maximum-repeating-substring/

// MINE..: brute force
/*
function maxRepeating(sequence: string, word: string): number {
    if(sequence.length === word.length) {
        if(sequence === word) return 1
        else return 0
    }
    
    const len = word.length
    let ans = 0
    
    for(let i=len; i<sequence.length; ++i) {
        console.log(sequence.substring(i-len, i), ans)
        if(word === sequence.substring(i-len, i)) {console.log("true"), ++ans}
    }
    
    return ans
};
*/

// ANSWER: brute force
function maxRepeating(sequence: string, word: string): number {
  let ans = 1
  while (sequence.includes(word.repeat(ans))) ++ans
  return ans - 1
}
