// https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string/

// MINE: in-place
/*
function removeDuplicates(s: string): string {
    const sArr = s.split('')
    
    let i = 1
    while(i < sArr.length) {
        if(sArr[i-1] === sArr[i]) {
            sArr.splice(i-1, 2)
            --i
        } else {
            ++i
        }
    }
    
    return sArr.join('')
};
*/

// MINE: stack
/*
function removeDuplicates(s: string): string {
    const stack = []
    
    for(let char of s) {
        if(stack[stack.length-1] === char) {
            stack.pop()
        } else {
            stack.push(char)
        }
    }
    
    return stack.join('')
}
*/

// ANSWER..: regex
// FATAL ERROR: MarkCompactCollector: young object promotion failed Allocation failed - JavaScript heap out of memory
function removeDuplicatesInString(s: string): string {
  const s2 = s.replace(/(.)\1/g, '')
  return s2.length === s.length ? s : removeDuplicatesInString(s2)
}
