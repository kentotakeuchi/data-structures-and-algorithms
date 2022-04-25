// https://leetcode.com/problems/check-if-numbers-are-ascending-in-a-sentence/

// MINE
/*
function areNumbersAscending(s: string): boolean {
    const arr = s.split(' ')
    const nums = []
    for(let str of arr) {
        const num = parseInt(str)
        if(num) {
            if(nums.length === 0) nums.push(num)
            else if(num <= nums[nums.length-1]) return false 
            else nums.push(num)
        }
    }
    return true
};
*/

// ANSWER
function areNumbersAscending(s: string): boolean {
  let prev = 0,
    cur = 0
  for (let char of s) {
    if (!isNaN(parseInt(char))) cur = cur * 10 + parseInt(char)
    else if (cur !== 0) {
      if (prev >= cur) return false
      prev = cur
      cur = 0
    }
  }
  return cur === 0 || cur > prev
}
