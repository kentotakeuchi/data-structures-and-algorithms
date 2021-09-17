// https://leetcode.com/problems/reorder-data-in-log-files/

// MINE..
/*
function reorderLogFiles(logs: string[]): string[] {
    const results = []
    const len = logs.length-1
    
    for(let i=0; i<logs.length; ++i) {
        const isDig = !!parseInt(logs[i][logs[i].length-1])
        
        // letter
        if(!isDig) {
            const words = logs[i].split(' ')
        }
        // digit
        else {
            results.push(logs[i])
        }
        console.log({isDig}, parseInt(logs[i][logs[i].length-1]))
    }
    
    return results
};
*/

// ANSWER
function reorderLogFiles(logs: string[]): string[] {
  const body = (s: string) => s.slice(s.indexOf(' ') + 1) // get the body after identifier
  const isNum = (c: string) => /\d/.test(c)

  // if body same then compare identifier
  const compare = (a: string, b: string) => {
    const n = body(a).localeCompare(body(b))
    if (n !== 0) return n
    return a.localeCompare(b)
  }

  const digitLogs = []
  const letterLogs = []
  for (const log of logs) {
    if (isNum(body(log))) digitLogs.push(log)
    else letterLogs.push(log)
  }
  return [...letterLogs.sort(compare), ...digitLogs]
}

/*** ref
// The letter "a" is before "c" yielding a negative value
'a'.localeCompare('c'); // -2 or -1 (or some other negative value)

// Alphabetically the word "check" comes after "against" yielding a positive value
'check'.localeCompare('against'); // 2 or 1 (or some other positive value)

// "a" and "a" are equivalent yielding a neutral value of zero
'a'.localeCompare('a'); // 0
***/
