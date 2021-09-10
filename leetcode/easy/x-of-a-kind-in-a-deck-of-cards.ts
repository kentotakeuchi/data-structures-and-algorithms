// https://leetcode.com/problems/x-of-a-kind-in-a-deck-of-cards/

// MINE..
/*
function hasGroupsSizeX(deck: number[]): boolean {
    if(deck.length < 2) return false
    
    const map = new Map()
    let min = Infinity
    
    for(let int of deck) {
        map.set(int, map.get(int)+1 || 1)
    }
    
    for(let [key, val] of map) {
        min = Math.min(min, val)
    }
    console.log({map, min})
    
    for(let [key, val] of map) {
        if(val % min !== 0) return false
    }
    
    return true
};
*/

// ANSWER: map + greatest common divisor(i tried to use gcd(), but couln't solve..)
function hasGroupsSizeX(deck: number[]): boolean {
  const map = new Map()
  let res = 0

  for (let int of deck) map.set(int, map.get(int) + 1 || 1)

  for (let [_, val] of map) res = gcd(val, res)

  return res >= 2

  // find greatest common divisor between 2 parameters
  function gcd(a: number, b: number): number {
    if (b === 0) return a
    return gcd(b, a % b)
  }
}
