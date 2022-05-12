// https://leetcode.com/problems/capitalize-the-title/

// MINE
/*
function capitalizeTitle(title: string): string {
    let ans = []
    for(let w of title.split(' ')) {
        const A = w.split('')
        if(A.length === 1) A[0] = A[0].toLowerCase()
        else if(A.length === 2) {
            A[0] = A[0].toLowerCase()
            A[1] = A[1].toLowerCase()
        }
        else {
            A[0] = A[0].toUpperCase()
            for(let i=1; i<A.length; ++i) A[i] = A[i].toLowerCase()
        }
        ans.push(A.join(''))
    }
    return ans.join(' ')
};
*/

// ANSWER
function capitalizeTitle(s: string): string {
  const chars = s.split('')
  for (let i = 0, j = 0; i <= chars.length; ++i) {
    if (i === chars.length || chars[i] === ' ') {
      if (i - j > 2) chars[j] = chars[j].toUpperCase()
      j = i + 1
    } else {
      chars[i] = chars[i].toLowerCase()
    }
  }
  return chars.join('')
}
