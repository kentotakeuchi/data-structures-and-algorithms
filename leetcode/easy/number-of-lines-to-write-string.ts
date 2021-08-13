// https://leetcode.com/problems/number-of-lines-to-write-string/

// MINE..
/*
function numberOfLines(widths: number[], s: string): number[] {
    let px = 0
    const arr = []
    
    for(let i=0; i<widths.length; ++i) {
        px += widths[i]
        if(px > 100) {
            arr.push(px - widths[i])
            px = widths[i]
        }
    }
    arr.push(px)
    console.log({arr})
    
    return [arr.length, px]
};
*/

// ANSWER
function numberOfLines(widths: number[], s: string): number[] {
  let lines = 1
  let last = 0
  const base = 'a'.charCodeAt(0)
  for (let i = 0; i < s.length; i++) {
    const width = widths[s.charCodeAt(i) - base]
    last += width
    if (last > 100) {
      lines++
      last = width
    }
  }
  return [lines, last]
}
