// https://leetcode.com/problems/replace-all-s-to-avoid-consecutive-repeating-characters/

// MINE..
/*
function modifyString(s: string): string {
    if(s.length === 1) return 'a'
    if(s[0] === '?') {
        const next = s.charCodeAt(1)
    }
    
    for(let i=0; i<s.length; ++i) {
        if(s[i] === '?') {
            
        }
    }
};
*/

// ANSWER: abc
const convertChar = (arr: string[], i: number): string => {
  if (arr[i] !== '?') {
    return arr[i]
  }

  if (arr[i - 1] !== 'a' && arr[i + 1] !== 'a') {
    return 'a'
  }

  if (arr[i - 1] !== 'b' && arr[i + 1] !== 'b') {
    return 'b'
  }

  return 'c'
}

function modifyString(s: string): string {
  const arr = s.split('')

  for (let i = 0; i < s.length; i++) {
    arr[i] = convertChar(arr, i)
  }

  return arr.join('')
}
