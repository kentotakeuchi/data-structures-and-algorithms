// https://leetcode.com/problems/isomorphic-strings/

// MINE: inefficient..
/*
function isIsomorphic(s: string, t: string): boolean {
    const mapS = new Map()
    const mapT = new Map()
    
    let i = 0
    for(let char of s) {
        if(mapS.has(char)) {
            mapS.set(char, mapS.get(char)+i)
        } else {
            mapS.set(char, ''+i)
        }
        ++i
    }
    
    let j = 0
    for(let char of t) {
        if(mapT.has(char)) {
            mapT.set(char, mapT.get(char)+j)
        } else {
            mapT.set(char, ''+j)
        }
        ++j
    }
    console.log({mapS, mapT})
    
    // if size is diff -> not isomorphic
    if(mapS.size !== mapT.size) return false
    
    let valS = ''
    for(let val of mapS.values()) {
        valS += val
    }
    
     let valT = ''
    for(let val of mapT.values()) {
        valT += val
    }
    
    return valS === valT
};
*/

// ANSWER
var isIsomorphic = function (s: string, t: string): boolean {
  // var obj: { [key: string]: string } = {}
  var obj: Record<string, string> = {}

  for (var i = 0; i < s.length; i++) {
    if (!obj['s' + s[i]]) obj['s' + s[i]] = t[i]
    if (!obj['t' + t[i]]) obj['t' + t[i]] = s[i]
    if (t[i] != obj['s' + s[i]] || s[i] != obj['t' + t[i]]) return false
  }
  return true
}
