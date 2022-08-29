// https://leetcode.com/problems/minimum-recolors-to-get-k-consecutive-black-blocks/

// MINE
/*
function minimumRecolors(b: string, k: number): number {
    let ws = 0
    for(let i=0; i<k; ++i) if(b[i] === 'W') ++ws
    if(b.length === k) return ws
    let min = ws
    for(let i=k; i<b.length; ++i) {
        if(b[i-k] === 'W' && b[i] === 'B') --ws
        else if(b[i-k] === 'B' && b[i] === 'W') ++ws
        if(k-ws >= k) return 0
        if(ws < min) min = ws
    }
    return min
};
*/

// ANSWER
function minimumRecolors(blocks: string, k: number): number {
  let back = 0,
    front = 0,
    count_w = 0,
    ans = Infinity
  while (front < blocks.length) {
    if (blocks[front] == 'W') count_w++
    if (front - back + 1 == k) {
      ans = Math.min(ans, count_w)
      if (blocks[back] == 'W') count_w--
      back++
    }
    front++
  }
  return ans
}
