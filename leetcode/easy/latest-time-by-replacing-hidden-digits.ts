// https://leetcode.com/problems/latest-time-by-replacing-hidden-digits/

// MINE
/*
function maximumTime(time: string): string {
    let [h1, h2, colon, m1, m2] = time.split('')
    
    if(h1 === '?') {
        if(parseInt(h2) < 4 || h2 === '?') h1 = '2'
        else h1 = '1'
    }
    
    if(h2 === '?') {
        if(h1 === '2') h2 = '3'
        else h2 = '9'
    }
    
    if(m1 === '?') m1 = '5'
    
    if(m2 === '?') m2 = '9'
    
    return h1+h2+colon+m1+m2
};
*/

// ANSWER
function maximumTime(time: any): string {
  time = time.split('')
  if (time[0] === '?') time[0] = time[1] > 3 ? '1' : '2'
  if (time[1] === '?') time[1] = time[0] > 1 ? '3' : '9'
  if (time[3] === '?') time[3] = '5'
  if (time[4] === '?') time[4] = '9'
  return time.join('')
}
