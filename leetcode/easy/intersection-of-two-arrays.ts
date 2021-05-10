// https://leetcode.com/problems/intersection-of-two-arrays/

// MINE..
/*
function intersection(nums1: number[], nums2: number[]): number[] {
    // base case
    if(!nums1.length || !nums2.length) return []
    
    const results = []
    
    const longer = nums1.length <= nums2.length ? nums2 : nums1
    const shorter = nums1.length <= nums2.length ? nums1 : nums2
    
    for(let i=0; i<longer.length; ++i) {
        if(longer[i] === shorter[0]) {
            let idx = i
            results.push(longer[i])
            
            for(let j=1; j<shorter.length; ++j) {
                if(longer[++idx] !== shorter[j]) {
                    break
                } else {
                    if(!results.includes(shorter[j])) {
                        results.push(shorter[j])
                    }
                }
            }
            
            break
        }
    }
    
    return results
};
*/

// ANSWER: brute force after sort
/*
function intersection(nums1: number[], nums2: number[]): number[] {
    let sortedNums1 = nums1.sort((a , b) => a - b);
    let sortedNums2 = nums2.sort((a , b) => a - b);
    let result = [];
    let i = 0;
    let j = 0;
    
    while(i < sortedNums1.length && j < sortedNums2.length){
        if(sortedNums1[i] === sortedNums2[j]){
            if(!result.includes(sortedNums1[i])) result.push(sortedNums1[i]);
            i++;
            j++;
        }
        else if(sortedNums1[i] < sortedNums2[j]) i++;
        else j++;
    }
    return result;
}
*/

// ANSWER: hashmap
/*
function intersection(nums1: number[], nums2: number[]): number[] {
    let map = new Map();
    for(let num of nums1){
        if(!map.has(num))
            map.set(num, 1);
    }
    
    return nums2.filter(n => {
        if(map.has(n)){
            map.delete(n);
            return true;
        }
        else return false;
    });
}
*/

// ANSWER: set1
/*
function intersection(nums1: number[], nums2: number[]): number[] {
    let result = [];
    let setNum1 = new Set(nums1);
    let setNum2 = new Set(nums2);

    let [smallSet , largeSet] = (setNum1.size < setNum2.size) ? [setNum1 , setNum2] : [setNum2 , setNum1];

    smallSet.forEach( num => {
        largeSet.has(num) && result.push(num);
    });

    return result;
}
*/

// ANSWER: set2
function intersection(nums1: number[], nums2: number[]): number[] {
  let setNum1 = new Set(nums1)

  return [...new Set(nums2.filter(num => setNum1.has(num)))]
}
