// https://leetcode.com/problems/detect-pattern-of-length-m-repeated-k-or-more-times/

// MINE..
/*
function containsPattern(arr: number[], m: number, k: number): boolean {
    const map = new Map()
    let str = ''
    for(let i=0; i<m; ++i) {
        str += `${arr[i]}`
    }
    map.set(str, 1)
    
    
    for(let i=m, j=i+m; j<=arr.length; j+=m) {
        let temp = ''
        while(i<j) temp += `${arr[i++]}`
        map.set(temp, map.get(temp)+1 || 1)
        if(map.get(temp) >= k) return true
    }
    
    return false
};
*/

// ANSWER
function containsPattern(arr: number[], m: number, k: number): boolean {
  for (let i = 0, j = i + m, count = 0; j < arr.length; ++i, ++j) {
    if (arr[i] != arr[j]) {
      count = 0
    } else if (++count == (k - 1) * m) {
      return true
    }
  }
  return false
}
