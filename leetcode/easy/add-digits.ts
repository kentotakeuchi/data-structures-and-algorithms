// https://leetcode.com/problems/add-digits/

// MINE: array *i wanted to use modulo
/*
function addDigits(num: number): number {
    let nums = num.toString().split('')
    let sum = 0
        
    while(2 <= nums.length) {
        sum = nums.reduce((acc, cur) => acc + parseInt(cur), 0)
        nums = sum.toString().split('')
    }
    
    return parseInt(nums[0])
};
*/

// ANSWER: it's what i wanted to come up with..
/*
function addDigits(num: number): number {
    let digitalRoot = 0
    while(0 < num) {
        digitalRoot += num % 10
        num = Math.floor(num / 10)
        
        if(num === 0 && 9 < digitalRoot) {
            num = digitalRoot
            digitalRoot = 0
        }
    }
    return digitalRoot
}
*/

// ANSWER: math > digital root
function addDigits(num: number): number {
  if (num == 0) return 0
  if (num % 9 == 0) return 9
  return num % 9
}
