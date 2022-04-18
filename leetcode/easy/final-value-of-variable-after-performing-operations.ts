// https://leetcode.com/problems/final-value-of-variable-after-performing-operations/

// MINE
/*
function finalValueAfterOperations(operations: string[]): number {
    let ans = 0
    for(let op of operations) {
        if(op === 'X++' || op === '++X') ++ans
        else --ans
    }
    return ans
};
*/

// ANSWER
const finalValueAfterOperations = (operations: string[]): number =>
  operations.reduce((acc, curr) => (curr[1] === '+' ? ++acc : --acc), 0)
