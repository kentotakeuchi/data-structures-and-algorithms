// https://leetcode.com/problems/longest-harmonious-subsequence/

// MINE..
/*
function findLHS(nums: number[]): number {
    if(nums.length <= 1) return 0
    
    let max = 0
    
    for(let i=0; i<nums.length-1; ++i) {
        if(Math.abs(nums[i] - nums[i+1]) === 1) {
            max = Math.max(max, 2)
            for(let j=i+2; j<nums.length; ++j) {
                console.log('i', i, ', j', j, ', nums[i]', nums[i], ', nums[i+1]', nums[i+1], ', nums[j]', nums[j], ', max', max)
                if(nums[j] === nums[i] || nums[j] === nums[i+1]) {
                    ++max
                }
            }
        }
    }
    
    return max
};
*/

// ANSWER: brute force
/*
function findLHS(nums: number[]): number {
    let res = 0
    for(let i=0; i<nums.length; ++i) {
        let count = 0
        let flag = false
        
        for(let j=0; j<nums.length; ++j) {
            if(nums[j] === nums[i]) {
                ++count
            } else if(nums[j]+1 === nums[i]) {
                ++count
                flag = true
            }
        }
        
        if(flag) res = Math.max(count, res)
    }
    
    return res
}
*/

// ANSWER: using sorting
/*
function findLHS(nums: number[]): number {
    nums.sort((a, z) => a - z)
    
    let prevCount = 1
    let res = 0
    
    for(let i=0; i<nums.length; ++i) {
        let count = 1
        
        if(i > 0 && nums[i] - nums[i-1] === 1) {
            while(i < nums.length-1 && nums[i] === nums[i+1]) {
                ++count
                ++i
            }
            
            res = Math.max(res, count + prevCount)
            prevCount = count
        } else {
            while(i < nums.length-1 && nums[i] === nums[i+1]) {
                ++count
                ++i
            }
            
            prevCount = count
        }
    }
    
    return res
}
*/

// ANSWER: using hashmap
/*
function findLHS(nums: number[]): number {
    const map = new Map()
    let res = 0
    
    for(let num of nums) {
        map.set(num, map.get(num)+1 || 1)
    }
    
    for(let [key, val] of map) {
        if(map.has(key+1)) {
            res = Math.max(res, val + map.get(key+1))
        }
    }
    
    return res
}
*/

// ANSWER: in single loop
function findLHS(nums: number[]): number {
  const map = new Map()
  let res = 0

  for (let num of nums) {
    map.set(num, map.get(num) + 1 || 1)

    if (map.has(num + 1)) {
      res = Math.max(res, map.get(num) + map.get(num + 1))
    }
    if (map.has(num - 1)) {
      res = Math.max(res, map.get(num) + map.get(num - 1))
    }
  }

  return res
}
