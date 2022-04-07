// https://leetcode.com/problems/delete-characters-to-make-fancy-string/

// MINE..
/*
function makeFancyString(s: string): string {
    let ans = ''
    for(let i=1; i<s.length; ++i) {
        let count = 1
        if(s[i-1] === s[i]) {
            while(s[i] === s[++i]) ++count
            ans += `${s[i-1]}${s[i-1]}`
        } else {
            ans += s[i-1]
            if(i === s.length-1) ans += s[s.length-1]
        }
    }
    return ans
};
*/

// ANSWER
function makeFancyString(s: string): string {
  let freq = 1,
    prev = s[0],
    ans = s[0]
  for (let i = 1; i < s.length; ++i) {
    if (prev === s[i]) {
      ++freq
    } else {
      prev = s[i]
      freq = 1
    }
    if (freq < 3) {
      ans += s[i]
    }
  }
  return ans
}
