// https://leetcode.com/problems/single-number/

// MINE: use map(inefficient) *using extra memory
/*
function singleNumber(nums: number[]): number {
    // base case
    if(nums.length === 1) return nums[0]
    
    // store the number of each digit
    const map = new Map()
    for(let num of nums) {
        if(map.has(num)) {
            map.set(num, map.get(num) + 1)
        } else {
            map.set(num, 1)
        }
    }
    
    // find digit which appear once
    for(let [key, val] of map) {
        if(val === 1) return key
    }
    
    // if not found
    return -1
};
*/

// MINE
/*
function singleNumber(nums: number[]): number {
    // base case
    if(nums.length === 1) return nums[0] 
    
};
*/

// ANSWER: hash *using extra space
/*
var singleNumber = function(nums) {
    let hash = {}
    for(let val of nums){
        hash[val]?delete hash[val]:hash[val]=1;
    }
    return Object.keys(hash)[0]
};
*/

// ANSWER: math *using extra space
function singleNumber(nums: number[]): number {
  let sumSet = 0
  let sumNums = 0
  let map = new Map()

  for (let num of nums) {
    if (!map.has(num)) {
      map.set(num, true)
      sumSet += num
    }

    sumNums += num
  }

  return 2 * sumSet - sumNums
}
