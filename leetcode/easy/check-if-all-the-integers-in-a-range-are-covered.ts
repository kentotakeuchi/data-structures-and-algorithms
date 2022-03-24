// https://leetcode.com/problems/check-if-all-the-integers-in-a-range-are-covered/

// MINE..
/*
function isCovered(ranges: number[][], left: number, right: number): boolean {
    for(let [s, e] of ranges) {
        if((s < left && e < left) || (s < left && right < e) || (right < s && right < e)) return false
    }
    return true
};
*/

// ANSWER: sweep
/*
function isCovered(ranges: number[][], left: number, right: number): boolean {
    const line = new Array(52).fill(0)
    
    for(let [start, end] of ranges) {
        ++line[start]
        --line[end+1]
    }
    
    for(let i=1, overlaps=0; i<=right; ++i) {
        overlaps += line[i]
        if(i >= left && overlaps === 0) return false
    }
    
    return true
}
*/

// ANSWER: straightforward since the range is small
function isCovered(ranges: number[][], left: number, right: number): boolean {
  const cover = new Array(51).fill(0)

  for (let [start, end] of ranges) {
    for (let i = start; i <= end; ++i) ++cover[i]
  }

  for (let i = left; i <= right; ++i) {
    if (cover[i] === 0) return false
  }

  return true
}
