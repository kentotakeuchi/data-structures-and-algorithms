// https://leetcode.com/problems/find-winner-on-a-tic-tac-toe-game/

type Result = 'A' | 'B' | 'Draw' | 'Pending'

// MINE..
/*
function tictactoe(moves: number[][]): Result {
    // either 'O' or 'X' is three of the same char filling --> A or B
    // non-empty --> Draw
    // no more moves --> Pending
    
    const grid = new Array(3).fill(0).map(el => ['', '', ''])
    let char = 'X'
    
    for(const [r, c] of moves) {
        grid[r][c] = char
    }
    
    return 'Draw'
};

function isWin(grid: string[][]): boolean {
    
}
*/

// ANSWER
function tictactoe(moves: number[][]): Result {
  const aRow = new Uint8Array(3),
    aCol = new Uint8Array(3),
    bRow = new Uint8Array(3),
    bCol = new Uint8Array(3)
  let aD1 = 0,
    aD2 = 0,
    bD1 = 0,
    bD2 = 0

  for (let i = 0; i < moves.length; ++i) {
    const [r, c] = moves[i]
    if (i % 2 === 1) {
      if (
        ++bRow[r] === 3 ||
        ++bCol[c] === 3 ||
        (r === c && ++bD1 === 3) ||
        (r + c === 2 && ++bD2 === 3)
      )
        return 'B'
    } else {
      if (
        ++aRow[r] === 3 ||
        ++aCol[c] === 3 ||
        (r === c && ++aD1 === 3) ||
        (r + c === 2 && ++aD2 === 3)
      )
        return 'A'
    }
  }

  return moves.length === 9 ? 'Draw' : 'Pending'
}
