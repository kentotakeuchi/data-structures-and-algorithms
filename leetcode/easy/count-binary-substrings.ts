// https://leetcode.com/problems/count-binary-substrings/

// MINE..
/*
function countBinarySubstrings(s: string): number {

};
*/

// ANSWER: group by character
function countBinarySubstrings(s: string): number {
  const groups = [1]

  for (let i = 1; i < s.length; ++i) {
    if (s[i - 1] !== s[i]) {
      groups.push(1)
    } else {
      groups[groups.length - 1] += 1
    }
  }

  let ans = 0
  for (let i = 1; i < groups.length; ++i) {
    ans += Math.min(groups[i - 1], groups[i])
  }

  return ans
}
