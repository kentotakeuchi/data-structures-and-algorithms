// https://leetcode.com/problems/backspace-string-compare/

// MINE..
/*
function backspaceCompare(s: string, t: string): boolean {
    return formatStr(s) === formatStr(t)
    
    function formatStr(str: string): string {
        const arr = str.split('') // [a, b, #, c]
        while(arr[0] === '#') arr.shift()
        
        for(let i=arr.length-1; i>0; --i) {
            if(arr[i] === '#') {
                arr.splice(i, 1)
                if(arr[i-1] !== '#') {
                    arr.splice(--i, 1)
                }
            }
        }
        console.log({arr})
        
        return arr.join('')
    }
};
*/

// ANSWER: build string
/*
function backspaceCompare(s: string, t: string): boolean {
    return build(s) === build(t)
    
    function build(str: string): string {
        const arr: string[] = []
        
        for(let char of str.split('')) {
            if(char !== '#') arr.push(char)
            else if(arr.length !== 0) arr.pop()
        }
        console.log({arr})
        
        return arr.join('')
    }
}
*/

// ANSWER: counter
function backspaceCompare(s: string, t: string): boolean {
  return edit(s) === edit(t)

  function edit(str: string): string {
    let result = ''
    let backspaces = 0

    for (let i = str.length - 1; i >= 0; i -= 1) {
      if (str[i] === '#') {
        backspaces += 1
      } else if (backspaces > 0) {
        backspaces -= 1
      } else {
        result = str[i] + result
      }
    }

    return result
  }
}
