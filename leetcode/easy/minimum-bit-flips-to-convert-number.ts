// https://leetcode.com/problems/minimum-bit-flips-to-convert-number/

// MINE
/*
function minBitFlips(start: number, goal: number): number {
    const S = start.toString(2), G = goal.toString(2)
    let ans = 0
    const diff = Math.abs(S.length - G.length)
    let shorter = S.length > G.length ? G : S
    let longer = S.length <= G.length ? G : S
    for(let i=0; i<diff; ++i) shorter = '0' + shorter
    for(let i=0; i<shorter.length; ++i) if(longer[i] !== shorter[i]) ++ans
    return ans
};
*/

// ANSWER: xor
function minBitFlips(start: number, goal: number): number {
  return (start ^ goal).toString(2).split('0').join('').length
}
