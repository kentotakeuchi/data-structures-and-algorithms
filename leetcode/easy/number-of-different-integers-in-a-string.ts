// https://leetcode.com/problems/number-of-different-integers-in-a-string/

// MINE
/*
function numDifferentIntegers(word: string): number {
    return new Set(word.split(/\D/g).filter(el => el !== '').map((str, idx) => {
        if(parseInt(str) !== Infinity) {
            return parseInt(str)
        } else {
            return idx
        }
    })).size
};
*/

// ANSER
function numDifferentIntegers(word: string): number {
  return new Set(
    word
      .split(/\D/g)
      .filter(el => el !== '')
      .map(str => str.replace(/^0+/g, ''))
  ).size
}
