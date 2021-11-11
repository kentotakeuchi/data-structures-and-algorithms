// https://leetcode.com/problems/find-numbers-with-even-number-of-digits/

// MINE: filter func
/*
function findNumbers(nums: number[]): number {
    return nums.filter(n => n.toString().length % 2 === 0).length
};
*/

// MINE: reduce func
/*
function findNumbers(nums: number[]): number {
    return nums.reduce((acc, cur) => {
        if(cur.toString().length % 2 === 0) return ++acc
        else return acc
    }, 0)
};
*/

// MINE: divide
/*
function findNumbers(nums: number[]): number {
    let ans = 0
    
    for(let n of nums) {
        let digits = 1
        
        while(n >= 10) {
            ++digits
            n /= 10
        }
        
        if(digits%2 === 0) ++ans
    }
    
    return ans
};
*/

// ANSWER: digit --> str
// & 1 to check if the value is even or odd
/*
function findNumbers(nums: number[]): number {
  let ret = 0;
  for (let i = 0; i < nums.length; ++i) {
    (nums[i].toString().length & 1) === 0 && ++ret;
  }
  return ret;
};
*/

// ANSWER: divide
// >> to truncate the value
function findNumbers(nums: number[]): number {
  let ret = 0;
  for (let i = 0; i < nums.length; ++i) {
    let len = 0;
    for (let val = nums[i]; val > 0; ++len) {
      val = val / 10 >> 0;
    }
    (len & 1) === 0 && ++ret;
  }
  return ret;
};
