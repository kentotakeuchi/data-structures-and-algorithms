// https://leetcode.com/problems/kth-largest-element-in-a-stream/

// MINE..
/*
class KthLargest {
    nums;
    k;
    constructor(k: number, nums: number[]) {
        this.nums = nums
        nums.sort((a, z) => a -z)
        this.k = k
    }

    add(val: number): number {
        if(val === this.nums[this.k]) {
            return this.nums[this.k]
        } else if(val < this.nums[this.k]) {
            for(let i=1; i<this.k-1; ++i) {
                if(val === this.nums[i-1]) return this.nums[this.k]
                else if(this.nums[i-1] < val && val < this.nums[i]) {
                    this.nums.splice(i, 0, val)
                    return this.nums[this.k]
                } else {
                    return this.nums[this.k]
                }
            }
        } else if(val > this.nums[this.k]) {
            for(let i=this.k+1; i<this.nums.length; ++i) {
                if(this.nums[i-1] && val === this.nums[i-1]) return this.nums[this.k]
                else if(this.nums[i-1] && this.nums[i] && this.nums[i-1] < val && val < this.nums[i]) {
                    this.nums.splice(i, 0, val)
                    return this.nums[this.k]
                } else {
                    return this.nums[this.k]
                }
            }
        }
    }
}
*/

// ANSWER: binary search
class KthLargest {
  k
  arr
  constructor(k: number, nums: number[]) {
    this.k = k
    this.arr = nums.sort((a, b) => a - b)
  }
  add(val: number) {
    const insert = () => {
      let l = 0,
        r = this.arr.length - 1
      while (l <= r) {
        const mid = Math.floor((l + r) / 2)
        if (this.arr[mid] === val) return mid
        if (this.arr[mid] < val) {
          l = mid + 1
        } else {
          r = mid - 1
        }
      }
      return l
    }
    this.arr.splice(insert(), 0, val)
    return this.arr[this.arr.length - this.k]
  }
}

/**
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */
