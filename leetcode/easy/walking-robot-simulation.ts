// https://leetcode.com/problems/walking-robot-simulation/

// const dirs = ['north', 'east', 'south', 'west'] as const
// type Dir = typeof dirs[number]
// interface Point {
//   x: number
//   y: number
// }

// MINE..
/*
function robotSim(commands: number[], obstacles: number[][]): number {
  let dirs: string[] = ['north', 'east', 'south', 'west']
  let idx = 0
  const point: Point = { x: 0, y: 0 }

  for (let i = 0; i < commands.length; ++i) {
    if(commands[i] === -2) {
      --idx
      if(idx === -1) idx = dirs.length-1
      continue
    } else if(commands[i] === -1) {
      ++idx
      if(idx === dirs.length) idx = 0
      continue
    }

    switch (dirs[idx]) {
      case 'east':
        point.x += commands[i]
        break
      case 'south':
        point.y -= commands[i]
        break
      case 'west':
        point.x -= commands[i]
        break
      default:
        point.y += commands[i]
        break
    }
  }
  console.log({ point })

  return Math.pow(point.x, 2) + Math.pow(point.y, 2)
}
*/

// ANSWER
function robotSim(commands: number[], obstacles: number[][]): number {
  let obstacle: any = {}
  let x = 0
  let y = 0
  let max = 0

  /* 0 = north
   * 1 = east
   * 2 = south
   * 3 = west
   */

  let direction = 0
  for (let i = 0; i < obstacles.length; i++) {
    obstacle[`${obstacles[i]}`] = true
  }

  for (let i = 0; i < commands.length; i++) {
    if (commands[i] == -1) {
      direction = (direction + 1) % 4 // updated
    } else if (commands[i] == -2) {
      direction = (direction - 1 + 4) % 4
    } else {
      while (commands[i]--) {
        let previousX = x
        let previousY = y

        if (direction === 0) y++
        if (direction === 1) x++
        if (direction === 2) y--
        if (direction === 3) x--
        if (obstacle[x + ',' + y]) {
          ;[x, y] = [previousX, previousY]
          break
        }
      }
    }
    max = Math.max(max, x ** 2 + y ** 2)
  }
  return max
}
