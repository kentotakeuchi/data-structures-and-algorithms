// https://leetcode.com/problems/path-crossing/

/*
const coordinates = {
    N: { x: 0, y: 1},
    E: { x: 1, y: 0},
    S: { x: 0, y: -1},
    W: { x: -1, y: 0}
}

// MINE: map
function isPathCrossing(path: string): boolean {
    const map = new Map()
    const cur = { x: 0, y: 0 }
    map.set('00', true)
    
    for(let p of path) {
        cur.x += coordinates[p].x
        cur.y += coordinates[p].y
        const key = `${cur.x}${cur.y}`
        
        if(map.has(key)) return true
        else map.set(key, true)
    }
    
    return false
};
*/

// ANSWER: set
function isPathCrossing(path: string): boolean {
  const set = new Set()
  set.add('0_0')
  let x = 0,
    y = 0

  for (let p of path) {
    switch (p) {
      case 'N':
        ++y
        break
      case 'S':
        --y
        break
      case 'E':
        ++x
        break
      default:
        --x
    }

    const cur = `${x}_${y}`
    if (set.has(cur)) return true
    else set.add(cur)
  }

  return false
}
