// https://leetcode.com/problems/count-of-matches-in-tournament/

// MINE
/*
function numberOfMatches(n: number): number {
    let ans = 0
    
    while(n > 1) {
        if(n%2===0) {
            n /= 2
            ans += n
        } else {
            n = (n-1)/2
            ans += n
            ++n
        }
    }
    
    return ans
};
*/

// ANSWER
function numberOfMatches(n: number): number {
  let cnt = 0
  while (n > 1) {
    cnt += Math.floor(n / 2)
    n = (n + 1) / 2
  }
  return cnt
}
