// https://leetcode.com/problems/robot-return-to-origin/

// MINE: map
/*
function judgeCircle(moves: string): boolean {
    const map = new Map()
    
    for(let dir of moves) {
        map.set(dir, map.get(dir)+1 || 1)
    }
    console.log({map})
    
    if(map.get('L') === map.get('R') && map.get('U') === map.get('D'))
        return true
    if(!map.has('U') && !map.has('D') && map.get('L') === map.get('R'))
        return true
    if(!map.has('L') && !map.has('R') && map.get('U') === map.get('D'))
        return true
    
    return false
};
*/

// ANSWER
function judgeCircle(moves: string): boolean {
  let x = 0,
    y = 0
  for (let i = 0; i < moves.length; i++) {
    switch (moves[i]) {
      case 'R':
        x++
        break
      case 'L':
        x--
        break
      case 'U':
        y++
        break
      case 'D':
        y--
        break
    }
  }
  return x === 0 && y === 0
}
