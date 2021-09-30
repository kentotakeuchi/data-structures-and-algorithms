// https://leetcode.com/problems/available-captures-for-rook/

// MINE..
/*
function numRookCaptures(board: string[][]): number {

};
*/

interface Board {
  i: number
  j: number
}

// ANSWER
function findRook(board: string[][]): Board {
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] === 'R') {
        return { i, j }
      }
    }
  }
  return { i: 0, j: 0 }
}

function checkRight(board: string[][], i: number, j: number) {
  let counter = 0

  while (true) {
    if (board[i][j] === 'B') {
      break
    } else if (board[i][j] === 'p') {
      counter++
      break
    } else if (j === board[i].length - 1) {
      break
    }

    j++
  }

  return counter
}

function checkLeft(board: string[][], i: number, j: number) {
  let counter = 0

  while (true) {
    if (board[i][j] === 'B') {
      break
    } else if (board[i][j] === 'p') {
      counter++
      break
    } else if (j === 0) {
      break
    }

    j--
  }

  return counter
}

function checkTop(board: string[][], i: number, j: number) {
  let counter = 0

  while (true) {
    if (board[i][j] === 'B') {
      break
    } else if (board[i][j] === 'p') {
      counter++
      break
    } else if (i === 0) {
      break
    }

    i--
  }

  return counter
}

function checkDown(board: string[][], i: number, j: number) {
  let counter = 0

  while (true) {
    if (board[i][j] === 'B') {
      break
    } else if (board[i][j] === 'p') {
      counter++
      break
    } else if (i === board.length - 1) {
      break
    }

    i++
  }

  return counter
}

function numRookCaptures(board: string[][]): number {
  let rook = findRook(board)
  let counter = 0

  counter += checkRight(board, rook.i, rook.j)
  counter += checkLeft(board, rook.i, rook.j)
  counter += checkTop(board, rook.i, rook.j)
  counter += checkDown(board, rook.i, rook.j)

  return counter
}
