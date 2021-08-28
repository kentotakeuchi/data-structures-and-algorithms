// https://leetcode.com/problems/binary-gap/

// MINE
/*
function binaryGap(n: number): number {
    const bi = n.toString(2)
    let max = 0
    let gap = 0
    let i= 0
    let j = 1
    
    while(j < bi.length) {
        if(bi[j] === '1') {
            i = j
            ++j
            ++gap
            max = Math.max(max, gap)
            gap = 0
        } else if(bi[j] === '0') {
            ++j
            ++gap
        }
    }
    
    return max
};
*/

// ANSWER: one pass (right -> left)
function binaryGap(n: number): number {
  let res = 0

  for (let distance = -32; n > 0; n = Math.floor(n / 2), ++distance) {
    if (n % 2 === 1) {
      res = Math.max(res, distance)
      distance = 0
    }
  }

  return res
}
