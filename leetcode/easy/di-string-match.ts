// https://leetcode.com/problems/di-string-match/

// MINE..
/*
function diStringMatch(s: string): number[] {

};
*/

// ANSWER: ad-hoc
function diStringMatch(s: string): number[] {
  const N = s.length
  let lo = 0
  let hi = N
  const ans = []

  for (let i = 0; i < N; ++i) {
    if (s[i] === 'I') ans[i] = lo++
    else ans[i] = hi--
  }

  ans[N] = lo
  return ans
}
