// https://leetcode.com/problems/count-negative-numbers-in-a-sorted-matrix/

// MINE: brute force
/*
function countNegatives(grid: number[][]): number {
    const m = grid.length-1
    const n = grid[0].length-1
    let ans = 0
    
    for(let row=m; row>=0; --row) {
        for(let col=n; col>=0; --col) {
            if(grid[row][col] >= 0) break
            ++ans
        }
    }
    
    return ans
};
*/

// MINE: binary search..
/*
function countNegatives(grid: number[][]): number {
    function bs(start: number, end: number) {
        const mid = Math.floor((end-start) / 2)
        
    }
}
*/

// ANSWER: binary search
/*
function countNegatives(grid: number[][]): number {
  let count = 0;
  for(const row of grid){
    const index = bs(row)
    count+= row.length - index;
  }
  return count
};

function bs(arr: number[]): number {
  let r = arr.length - 1;
  let l = 0;
  while(l <= r){
    const mid = Math.floor((l+r)/2)
    if(arr[mid] < 0){
      r = mid-1
    }else{
      l = mid+1
    }
  }
  return l
}
*/

// ANSWER: stair, start with bottom/right
function countNegatives(grid: number[][]): number {
  const m = grid.length,
    n = grid[0].length
  let r = m - 1,
    c = 0,
    ans = 0

  while (r >= 0 && c < n) {
    if (grid[r][c] < 0) {
      --r
      ans += n - c
    } else {
      ++c
    }
  }

  return ans
}
