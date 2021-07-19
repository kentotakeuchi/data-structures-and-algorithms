// https://leetcode.com/problems/baseball-game/

// MINE
/*
function calPoints(ops: string[]): number {
    const stack = []
    
    for(let i=0; i<ops.length; ++i) {
        const len = stack.length
        if(ops[i] === '+') {
            stack.push(stack[len-2] + stack[len-1])
        } else if(ops[i] === 'D') {
            stack.push(stack[len-1] * 2)
        } else if(ops[i] === 'C') {
            stack.pop()
        } else {
            stack.push(parseInt(ops[i]))
        }
    }
    console.log({stack})
    
    return stack.reduce((acc, cur) => acc + cur, 0)
};
*/

// ANSWER
function calPoints(ops: string[]): number {
  let stack: number[] = []
  ops.forEach(op => {
    if (parseInt(op)) {
      stack.push(parseInt(op))
    } else if (op === '+') {
      stack.push((stack[stack.length - 1] || 0) + (stack[stack.length - 2] || 0))
    } else if (op === 'D') {
      stack.push((stack[stack.length - 1] || 0) * 2)
    } else if (op === 'C') {
      stack.pop()
    }
  })
  console.log(stack)
  return stack.reduce((a, v) => a + v, 0)
}
