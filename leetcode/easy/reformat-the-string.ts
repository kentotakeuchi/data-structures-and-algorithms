// https://leetcode.com/problems/reformat-the-string/

// MINE
/*
function reformat(s: string): string {
    let ans = ''
    const validation = [-1, 0, 1]
    
    // count letter and digit
    const arrL = s.match(/\D/g) || []
    const arrD = s.match(/\d/g) || []
    
    // check if s is impossible to be reformatted
    const diff = arrL.length - arrD.length
    if(!validation.includes(diff)) return ''
    
    // build answer
    while(arrL.length || arrD.length) {
        if(arrL.length >= arrD.length) {
            ans += arrL.length ? arrL.pop() : ''
            ans += arrD.length ? arrD.pop() : ''
        } else {
            ans += arrD.length ? arrD.pop() : ''
            ans += arrL.length ? arrL.pop() : ''
        }
    }
    
    return ans
};
*/

// ANSWER
function reformat(s: string): string {
  let a: string[] = [],
    b: string[] = []
  for (let x of s) {
    isNaN(Number(x)) ? a.push(x) : b.push(x)
  }
  if (a.length < b.length) {
    ;[a, b] = [b, a]
  }
  return a.length - b.length <= 1 ? a.map((x, i) => x + (b[i] ? b[i] : '')).join('') : ''
}
