// https://leetcode.com/problems/max-consecutive-ones/

// MINE
/*
function findMaxConsecutiveOnes(nums: number[]): number {
    let max = 0
    nums.join('').split('0').forEach(str => {
        max = Math.max(max, str.length)
    })
    
    return max
};
*/

// ANSWER
/*
function findMaxConsecutiveOnes(nums: number[]): number {
    let max = 0, curr = 0;
    for (let k of nums) {
        max = Math.max(max, curr += k);
        if (!k) curr = 0;
    }
    return max;
};
*/

// ANSWER
/*
function findMaxConsecutiveOnes(nums: number[]): number {
    return nums.join('').split('0').reduce((max, ones) => Math.max(max, ones.length), 0);
};
*/

// // ANSWER
function findMaxConsecutiveOnes(nums: number[]): number {
  return Math.max(
    ...nums
      .join('')
      .split('0')
      .map(ones => ones.length)
  )
}
