// https://leetcode.com/problems/intersection-of-two-arrays-ii/

// MINE..
/*
function intersect(nums1: number[], nums2: number[]): number[] {
    let short = nums1.length <= nums2.length ? nums1 : nums2
    const long = nums1.length <= nums2.length ? nums2 : nums1
    
    while(short.length) {
        if(hasSubArray(long, short)) {
            return short
        }
        
        short = short.slice(0, short.length-1)
    }
    
    return [-1]
};

function hasSubArray(master: number[], sub: number[]): boolean {
    return (-1 < (master.toString()).indexOf(sub.toString()))
}
*/

// ANSWER: hashmap
/*
function intersect(nums1: number[], nums2: number[]): number[] {
    const map = new Map();
    for (const n of nums1) {
        if (map.has(n)) {
            map.set(n, map.get(n) + 1);
        } else {
            map.set(n, 1);
        }
    }
    const result = [];
    for (const n of nums2) {
        if (map.has(n) && map.get(n) > 0) {
            result.push(n);
            map.set(n, map.get(n) - 1);
        }
    }
    return result;
};
*/

// ANSWER: sort
function intersect(nums1: number[], nums2: number[]): number[] {
  let a1 = nums1.sort((a, b) => a - b)
  let a2 = nums2.sort((a, b) => a - b)
  let result: any[] = []
  while (a1.length && a2.length) {
    if (a1[0] === a2[0]) {
      result.push(a1.shift())
      a2.shift()
    } else if (a1[0] > a2[0]) {
      a2.shift()
    } else {
      a1.shift()
    }
  }
  return result
}
