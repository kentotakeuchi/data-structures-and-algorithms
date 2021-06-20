// https://leetcode.com/problems/student-attendance-record-i/

// MINE
/*
function checkRecord(s: string): boolean {
    if(s.length <= 1) return true
    
    let absence = 0
    
    for(let i=0; i<s.length; ++i) {
        if(s[i] === 'A') {
            ++absence
            if(1 < absence) return false
        } else if(s[i] === 'L') {
            if(i < s.length-2 && s[i+1] === 'L' && s[i+2] === 'L') return false
        }
    }
    
    return true
};
*/

// ANSWER: regex
/*
function checkRecord(s: string): boolean {
    // check if there are more than 2 As and 3 continuous Ls
    return !/^.*(A.*A|L{3,}).*$/.test(s);
};
*/

// ANSWER: no regex
function checkRecord(s: string): boolean {
  return s.split('').filter(s => s == 'A').length <= 1 && !s.includes('LLL')
}
