// https://leetcode.com/problems/pascals-triangle/

// MINE
/*
function generate(numRows: number): number[][] {
    // base case
    if(numRows === 1) return [[1]]
    
    // declare results
    const results = [[1], [1, 1]]
    // declare count
    let count = 2
    
    // loop
    while(count < numRows) {
        // declare inner array
        const level = []
        
        // loop to push num into the inner array
        for(let i=0; i<=count; ++i) {
            // if point is leftmost or rightmost
            if(i === 0 || i === count) {
                level.push(1)
            }
            // if not, push sum of current point -1 and current point in the above row
            else {
                level.push(results[count-1][i-1] + results[count-1][i])
            }
        }
         
        // push inner array into outer one
        results.push(level)
        // move to next level
        ++count
    }
    
    return results
};
*/

// ANSWER: dp?
var generate = (numRows: number): number[][] => {
  var pascal: number[][] = []
  for (var i = 0; i < numRows; i++) {
    pascal[i] = []
    pascal[i][0] = 1
    for (var j = 1; j < i; j++) {
      pascal[i][j] = pascal[i - 1][j - 1] + pascal[i - 1][j]
    }
    pascal[i][i] = 1
  }
  return pascal
}
