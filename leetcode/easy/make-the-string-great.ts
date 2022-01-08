// https://leetcode.com/problems/make-the-string-great/

// MINE: naive.. (why charCodeAt is undefined?)
/*
function makeGood(s: string): string {
    let i = 1
    const arr = s.split('')
    
    while(i < s.length) {
        if(Math.abs(arr[i].charCodeAt(0) - arr[i-1].charCodeAt(0)) === 32) {
            arr.splice(i-1, 2)
            i = 0
        }
        ++i
    }
    
    return arr.join('')
};
*/

// ANSWER: stack
function makeGood(s: string): string {
  const stack = ['']

  for (let c of s) {
    let top = stack[stack.length - 1]
    if (top.toLowerCase() === c.toLowerCase() && top !== c) stack.pop()
    else stack.push(c)
  }
  return stack.join('')
}
