// https://leetcode.com/problems/check-if-n-and-its-double-exist/

// MINE: naive..
/*
function checkIfExist(arr: number[]): boolean {
    for(let i=0; i<arr.length-1; ++i) {
        
        for(let j=i+1; j<arr.length; ++j) {
            if(!arr[i] && !arr[j]) return true
            console.log({i, j}, arr[i] << 1, arr[i] >> 1, arr[j])
            if(arr[i] < arr[j] && arr[i] << 1 === arr[j]) return true
            if(arr[i] > arr[j] && !(arr[i] & 1) && arr[i] >> 1 === arr[j]) return true
        }
    }
    
    return false
};
*/

// ANSWER
function checkIfExist(arr: number[]): boolean {
  const seen = new Set()
  for (let n of arr) {
    if (seen.has(n << 1) || seen.has(n / 2)) return true
    seen.add(n)
  }
  return false
}
