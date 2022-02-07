// https://leetcode.com/problems/goal-parser-interpretation/

// MINE
/*
function interpret(command: string): string {
    let ans = ''
    
    for(let i=0; i<command.length; ++i) {
        if(command[i] === 'G') {
            ans += 'G'
        } else {
            if(command[i+1] === ')') {ans += 'o', ++i}
            else {ans += 'al', i+=3}
        }
    }
    
    return ans
};
*/

// ANSWER: replaceAll(need es2021..)
/*
function interpret(command: string): string {
    // return command.replaceAll('()','o').replaceAll('(al)','al')
    return command.replace(/\(\)/g, 'o').replace(/\(al\)/g, 'al')
}
*/

// ANSWER:
function interpret(s: string): string {
  let ans = ''
  for (let i = 0; i < s.length; ) {
    if (s[i] === 'G') (ans += 'G'), ++i
    else if (s[i + 1] === ')') (ans += 'o'), (i += 2)
    else (ans += 'al'), (i += 4)
  }
  return ans
}
