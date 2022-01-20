// https://leetcode.com/problems/crawler-log-folder/

// MINE: stack
/*
function minOperations(logs: string[]): number {
    const stack = []
    
    for(let ope of logs) {
        if(ope === './') {
            continue
        } else if(ope === '../') {
            if(stack.length === 0) continue
            stack.pop()
        } else {
            stack.push(ope)
        }
    }
    
    return stack.length
};
*/

// ANSWER
function minOperations(logs: string[]): number {
  let ans = 0

  for (let s of logs) {
    if (s === '../') ans = Math.max(0, --ans)
    else if (s === './') continue
    else ++ans
  }

  return ans
}
