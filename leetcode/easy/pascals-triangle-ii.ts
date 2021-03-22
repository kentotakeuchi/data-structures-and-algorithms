// https://leetcode.com/problems/pascals-triangle-ii/

// MINE..
/*
function getRow(rowIndex: number): number[] {
    // according to the question, can't store above row
    
};
*/

// ANSWER
/*
var getRow = function(rowIndex) {
    var row = [1];
    
    for(var i = 1 ; i <= rowIndex ; i++) {
        for(var j = i; j > 0; j--) {
            if(j === i)
                row[j] = 1;
            else
                row[j] = row[j - 1] + row[j];
        }
    }
    return row;
};
*/

// ANSWER
const getRow = (rowIndex: number): number[] => {
  const res = []

  while (res.length <= rowIndex) {
    res.unshift(1)
    for (let i = 1; i < res.length - 1; i++) {
      res[i] += res[i + 1]
    }
  }

  return res
}
