// https://leetcode.com/problems/next-greater-element-i/

// MINE
/*
function nextGreaterElement(nums1: number[], nums2: number[]): number[] {
    const results = []
    
    for(let i=0; i<nums1.length; ++i) {
        const idx = nums2.findIndex(n => n === nums1[i])
        
        for(let j=idx+1; j<nums2.length; ++j) {
            if(nums1[i] < nums2[j]) {
                results.push(nums2[j])
                break
            }
        }
        
        if(results.length < i+1) results.push(-1)
    }
    
    return results
};
*/

// ANSWER: stack and map
/*
function nextGreaterElement(nums1: number[], nums2: number[]): number[] {
  const map = {};
  const stack = [];
  nums2.forEach(n => {
    while (stack.length > 0 && stack[stack.length - 1] < n) {
      map[stack.pop()] = n;
    }
    stack.push(n);
  });
  return nums1.map(n => map[n] || -1);
};
*/

// ANSWER:
function nextGreaterElement(findNums: number[], nums: number[]): number[] {
  return findNums.map(n => {
    let found = nums.indexOf(n)

    if (found !== -1) {
      // find the next greater element's index
      while (nums[++found] < n);
      // -1 if not found
      if (found >= nums.length) found = -1
      else found = nums[found]
    }

    return found
  })
}
