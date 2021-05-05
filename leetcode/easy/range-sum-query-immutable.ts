// https://leetcode.com/problems/range-sum-query-immutable/

// MINE
/*
class NumArray {
    private nums
    constructor(nums: number[]) {
        this.nums = nums
    }

    sumRange(left: number, right: number): number {
        return this.nums.slice(left, right+1).reduce((acc, cur) => acc + cur, 0)
    }
}
*/

// ANSWER: caching
class NumArray {
  private sums: number[]
  constructor(nums: number[]) {
    this.sums = nums
    for (let i = 1; i < nums.length; ++i) {
      this.sums[i] += this.sums[i - 1]
    }
  }

  sumRange(left: number, right: number): number {
    if (left === 0) return this.sums[right]
    return this.sums[right] - this.sums[left - 1]
  }
}

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */
