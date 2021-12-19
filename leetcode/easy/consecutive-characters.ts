// https://leetcode.com/problems/consecutive-characters/

// MINE
/*
function maxPower(s: string): number {
    let ans = 1
    let count = 1
    
    for(let i=1; i<s.length; ++i) {
        if(s[i-1] === s[i]) {
            ++count
        } else {
            if(ans < count) ans = count
            count = 1
        }
    }
    if(ans < count) ans = count
    
    return ans
};
*/

// ANSWER
function maxPower(s: string): number {
  let power = 1

  let start = 0
  for (let end = 1; end < s.length; end++) {
    if (s[start] !== s[end]) {
      start = end
    }

    power = Math.max(power, end - start + 1)
  }

  return power
}
