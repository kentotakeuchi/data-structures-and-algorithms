// https://leetcode.com/problems/distribute-candies/

// MINE
/*
function distributeCandies(candyType: number[]): number {
    if(candyType.length === 2) return 1
    
    const map = new Map()
    const max = candyType.length / 2
    
    for(let num of candyType) {
        if(map.has(num)) {
            map.set(num, map.get(num)+1)
        } else {
            map.set(num, 1)
        }
    }
    
    return max < map.size ? max : map.size
};
*/

// ANSWER: set
function distributeCandies(candies: number[]): number {
  return Math.min(new Set(candies).size, candies.length / 2)
}
