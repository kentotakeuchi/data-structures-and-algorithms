// https://leetcode.com/problems/minimum-moves-to-convert-string/

// MINE
/*
function minimumMoves(s: string): number {
    let ans = 0
    const arr = s.split('')
    for(let i=0; i<arr.length; ++i) {
        let hasX = false
        for(let j=i; j<i+3; ++j) {
            if(arr[j] === 'X') {
                hasX = true
                arr[j] = 'O'
            }
        }
        if(hasX) ++ans
    }
    return ans
};
*/

// ANSWER
function minimumMoves(s: string): number {
  let ans = 0,
    n = s.length,
    i = 0
  while (i < n) {
    if (s[i] === 'O') {
      ++i
    } else {
      ++ans, (i += 3)
    }
  }
  return ans
}
