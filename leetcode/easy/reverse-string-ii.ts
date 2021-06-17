// https://leetcode.com/problems/reverse-string-ii/

// MINE
/*
function reverseStr(s: string, k: number): string {
    // base case
    if(s.length < k) return s.split('').reduce((acc, cur) => cur + acc, '')
    
    let result = ''
    for(let i=0; i<s.length; i += 2*k) {
        let reversed = s.split('').slice(i, i+k).reduce((acc, cur) => cur + acc, '')
        if(i+2*k < s.length)
            result += reversed + s.slice(i+k, i+2*k)
        else
            result += reversed + s.slice(i+k)
    }
    
    return result
};
*/

// ANSWER
/*
function reverseStr(s: string, k: number): string {
    if (k > s.length) return s.split('').reverse().join('');
    
    const split = s.split('');
    
    // reverse the segment and put it back
    for (let i = 0; i < s.length; i += 2*k) {
        const reverse = split.splice(i, k).reverse();
        split.splice(i, 0, ...reverse);
    }
    
    return split.join('');
};
*/

// ANSWER
function reverseStr(s: string, k: number): string {
  if (s.length >= k && s.length <= 2 * k) {
    return s.slice(0, k).split('').reverse().join('') + s.slice(k)
  } else {
    let result = ''
    for (let i = 0; i < s.length; i++) {
      if (i % (2 * k) == 0) {
        result += s
          .slice(i, i + k)
          .split('')
          .reverse()
          .join('')
        i += k - 1
      } else result += s[i]
    }
    return result
  }
}
