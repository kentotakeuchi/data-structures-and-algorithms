// https://leetcode.com/problems/island-perimeter/

// MINE..
/*
function islandPerimeter(grid: number[][]): number {
    let result = 0
    const rowLen = grid.length
    const colLen = grid[0].length
    
    for(let i = 0; i < colLen; ++i) {
        if(grid[0][i] === 1) {
            
        }
    }
    for(let j = 1; j < colLen; ++j) {
        if(grid[j][0]) result += countCellPremeter(j, 0)
    }
    
    for(let i = 0; i < rowLen; ++i) {
        for(let j = 0; j < colLen; ++j) {
            
        }
    }

    function countCellPremeter(row, col) {
        // out of range
        if(row < 0 || rowLen <= row) return
        if(col)
    }
};
*/

// ANSWER
/*
function islandPerimeter(grid: number[][]): number {
    const rows = grid.length;
    const cols = grid[0].length;
    
    var perimeter = 0;
    
    for (var row = 0; row < rows; row++) {
        for (var col = 0; col < cols; col++) {
            if (!grid[row][col]) continue;
            
            perimeter += 4;
            
            // abstract the number of adjacent island
            if (row > 0 && grid[row - 1][col]) perimeter--;
            if (col > 0 && grid[row][col - 1]) perimeter--;
            if (row < rows - 1 && grid[row + 1][col]) perimeter--;
            if (col < cols - 1 && grid[row][col + 1]) perimeter--;
        }
    }
    
    return perimeter;
};
*/

// ANSWER: brute force
function borders(grid: number[][], r: number, c: number) {
  let count = 0

  if (grid[r + 1]?.[c] != 1) {
    count++
  }

  if (grid[r - 1]?.[c] != 1) {
    count++
  }

  if (grid[r][c + 1] != 1) {
    count++
  }

  if (grid[r][c - 1] != 1) {
    count++
  }

  return count
}

function islandPerimeter(grid: number[][]): number {
  let result = 0

  for (let r = 0; r < grid.length; r++) {
    for (let c = 0; c < grid[r].length; c++) {
      if (grid[r][c] === 1) {
        result += borders(grid, r, c)
      }
    }
  }

  return result
}
