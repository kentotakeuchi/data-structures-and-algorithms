// https://leetcode.com/problems/find-the-difference-of-two-arrays/

// MINE: set
function findDifference(nums1: number[], nums2: number[]): number[][] {
  const set1 = new Set(nums1),
    set2 = new Set(nums2)
  for (let el of set2) {
    if (set1.has(el)) {
      set1.delete(el)
      set2.delete(el)
    }
  }
  return [[...set1], [...set2]]
}

// ANSWER
