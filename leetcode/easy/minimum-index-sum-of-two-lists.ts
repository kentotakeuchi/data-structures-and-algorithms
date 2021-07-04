// https://leetcode.com/problems/minimum-index-sum-of-two-lists/

// MINE: hash map, too slow
/*
function findRestaurant(list1: string[], list2: string[]): string[] {
    const results = []
    const map = new Map()
    let min = Infinity
    
    for(let i=0; i<list1.length; ++i) {
        let idx = list2.indexOf(list1[i])
        if(idx !== -1) {
            map.set(list1[i], i+idx)
            min = Math.min(min, i+idx)
        }
    }
    
    for(let [key, val] of map) {
        if(val === min) results.push(key)
    }
    
    return results
};
*/

// ANSWER: hash map(linear)
function findRestaurant(list1: string[], list2: string[]): string[] {
  const map = new Map()

  for (let i = 0; i < list1.length; ++i) map.set(list1[i], i)

  let res = []
  let min = Infinity
  let sum = 0

  for (let j = 0; j < list2.length && j <= min; ++j) {
    if (map.has(list2[j])) {
      sum = j + map.get(list2[j])

      if (sum < min) {
        res = []
        res.push(list2[j])
        min = sum
      } else if (sum === min) {
        res.push(list2[j])
      }
    }
  }

  return res
}
