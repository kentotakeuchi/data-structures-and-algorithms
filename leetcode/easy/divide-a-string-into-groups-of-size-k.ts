// https://leetcode.com/problems/divide-a-string-into-groups-of-size-k/

// MINE
/*
function divideString(s: string, k: number, fill: string): string[] {
    const ans = [], n = s.length
    const int = Math.ceil(n / k), remain = k - (n % k)
    let fills = ''
    for(let i=0; i<remain; ++i) fills += fill
    for(let i=0; i<n; i+=k) {
        let word = ''
        if(i > n-k) word = s.substring(i) + fills
        else word = s.substring(i, i+k)
        ans.push(word)
    }
    return ans
};
*/

// ANSWER
function divideString(s: string, k: number, fill: string): string[] {
  const ans = [],
    n = s.length
  for (let i = 0; i < k - (n % k); ++i) s += fill
  for (let i = 0; i < n; i += k) ans.push(s.substring(i, i + k))
  return ans
}
