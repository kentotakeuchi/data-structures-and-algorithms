// https://leetcode.com/problems/number-of-equivalent-domino-pairs/

// MINE: brute force
/*
function numEquivDominoPairs(dominoes: number[][]): number {
    let pairs = 0
    
    for(let i=0; i<dominoes.length; ++i) {
        const [a, b] = dominoes[i]
        
        for(let j=i+1; j<dominoes.length; ++j) {
            const [c, d] = dominoes[j]
            if(a === c && b === d || a === d && b === c) ++pairs
        }
    }
    
    return pairs
};
*/

// ANSWER: map
function numEquivDominoPairs(dominoes: number[][]): number {
  const map = new Map()
  let count = 0

  for (const [a, b] of dominoes) {
    let key = a < b ? `${a}${b}` : `${b}${a}`

    const val = map.get(key) + 1 || 0
    map.set(key, val)
    count += val
  }

  return count
}
