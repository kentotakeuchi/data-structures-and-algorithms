// https://leetcode.com/problems/strong-password-checker-ii/

// MINE: map
/*
function strongPasswordCheckerII(p: string): boolean {
    if(p.length < 8) return false
    const map = new Map([['l', 0], ['u', 0], ['d', 0], ['s', 0]])
    for(let i=0; i<p.length; ++i) {
        if(i !== p.length-1 && p[i].charCodeAt(0) === p[i+1].charCodeAt(0)) return false
        if(97 <= p[i].charCodeAt(0) && p[i].charCodeAt(0) <= 122) map.set('l', map.get('l')+1)
        if(65 <= p[i].charCodeAt(0) && p[i].charCodeAt(0) <= 90) map.set('u', map.get('u')+1)
        if(48 <= p[i].charCodeAt(0) && p[i].charCodeAt(0) <= 57) map.set('d', map.get('d')+1)
        if("!@#$%^&*()-+".includes(p[i])) map.set('s', map.get('s')+1 || 1)
    }
    for(let [k, v] of map) if(v === 0) return false
    return true
};*/

// ANSWER: set
function strongPasswordCheckerII(p: string): boolean {
  if (p.length < 8) return false
  const set = new Set()
  for (let i = 0; i < p.length; ++i) {
    if (i > 0 && p[i - 1] == p[i]) return false
    if ('0' <= p[i] && p[i] <= '9') set.add('d')
    else if ('!@#$%^&*()-+'.includes(p[i])) set.add('s')
    else if (p[i] === p[i].toLowerCase()) set.add('l')
    else set.add('u')
  }
  return set.size === 4
}
