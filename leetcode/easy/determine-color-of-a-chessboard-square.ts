// https://leetcode.com/problems/determine-color-of-a-chessboard-square/

// const letters1 = 'aceg'
// const letters2 = 'bdfh'

// MINE
/*
function squareIsWhite(coordinates: string): boolean {
    if(letters1.includes(coordinates[0]) && parseInt(coordinates[1])%2 === 1) return false
    if(letters2.includes(coordinates[0]) && parseInt(coordinates[1])%2 === 0) return false
       
    return true
};
*/

// ANSWER
function squareIsWhite(c: string): boolean {
  return c[0].charCodeAt(0) % 2 !== parseInt(c[1]) % 2
}

/**
'a' = 97, 'b' = 98 in unicode
*/
