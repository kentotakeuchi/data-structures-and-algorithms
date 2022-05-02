// https://leetcode.com/problems/two-furthest-houses-with-different-colors/

// MINE..
/*
function maxDistance(c: number[]): number {
    let max = 0
    for(let l=0; l<c.length; ++l) {
        let count = 0
        for(let r=c.length-1; r>l; --r) {
            if(c[l] !== c[r]) {
                ++count
            } else {
                max = Math.max(max, count)
                count = 0
            }
        }
        max = Math.max(max, count)
    }
    return max
};
*/

// ANSWER
function maxDistance(c: number[]): number {
  let i = 0,
    j = c.length - 1,
    n = c.length
  while (c[0] === c[j]) --j
  while (c[n - 1] === c[i]) ++i
  return Math.max(n - 1 - i, j)
}
