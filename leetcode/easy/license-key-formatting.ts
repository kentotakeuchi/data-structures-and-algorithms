// https://leetcode.com/problems/license-key-formatting/

// MINE..
/*
function licenseKeyFormatting(s: string, k: number): string {

};
*/

// ANSWER
function licenseKeyFormatting(s: string, k: number): string {
  const arr = s.split('-').join('').split('')
  for (let i = arr.length - k - 1; i >= 0; i -= k) arr[i] += '-'
  return arr.join('').toUpperCase()
}
