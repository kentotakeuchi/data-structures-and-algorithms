// https://leetcode.com/problems/reverse-string/

/**
 Do not return anything, modify s in-place instead.
 */

// MINE: built-in
/*
function reverseString(s: string[]): void {
    s.reverse()
    console.log(`done: ${s}`)
};
*/

// MINE: swap(iterative)
/*
function reverseString(s: string[]): void {
    let start = 0
    let end = s.length-1
    
    while(start < end) {
        swap(s, start, end)
        ++start
        --end
    }

    console.log(`done: ${s}`)
};

function swap(arr, i, j) {
    [arr[i], arr[j]] = [arr[j], arr[i]]
}
*/

// ANSWER: recursion
var reverseString = (s: string[]): void => {
  reverse(0, s.length - 1)

  function reverse(i: number, j: number): void {
    if (i >= j) return
    ;[s[i], s[j]] = [s[j], s[i]]
    reverse(i + 1, j - 1)
  }
}
