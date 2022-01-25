// https://leetcode.com/problems/largest-substring-between-two-equal-characters/

// MINE..
/*
function maxLengthBetweenEqualCharacters(s: string): number {
    const map = new Map()
    
    for(let i=0, j=s.length-1; i<j; ++i, --j) {
        map.has(s[i]) ? map.set(s[i], [...map.get(s[i]), i]) : map.set(s[i], [i])
        map.has(s[j]) ? map.set(s[j], [...map.get(s[j]), j]) : map.set(s[j], [j])
        console.log({map})
        
        const arr1 = map.get(s[i])
        const arr2 = map.get(s[j])
        console.log({arr1, arr2})
        
        if(arr1.length === 2) return Math.abs(Math.abs(arr1[1]) - Math.abs(arr1[0])) - 1
        if(arr2.length === 2) return Math.abs(Math.abs(arr2[1]) - Math.abs(arr2[0])) - 1
    }
    
    return -1
};
*/

// ANSWER: map
/*
function maxLengthBetweenEqualCharacters(s: string): number {
    const map = new Map();
    let max=-1;
    
    for(let i=0;i<s.length;i++){
        if(map.has(s[i])){
            max=Math.max(max,i-(map.get(s[i])+1))
        }else{
            map.set(s[i],i)    
        }
    }
    
    return max;
};
*/

// ANSWER: array
function maxLengthBetweenEqualCharacters(s: string): number {
  const n = s.length
  const start = new Array(26).fill(-1)
  let max = -1

  for (let i = 0; i < n; i++) {
    const index = s.charAt(i).charCodeAt(0) - 97

    if (start[index] === -1) start[index] = i
    else max = Math.max(max, i - start[index] - 1)
  }

  return max
}
