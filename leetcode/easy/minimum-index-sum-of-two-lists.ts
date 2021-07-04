// https://leetcode.com/problems/minimum-index-sum-of-two-lists/

// MINE
function findRestaurant(list1: string[], list2: string[]): string[] {
  const map = new Map()

  for (let i = 0; i < list1.length; ++i) {
    const idx = list2.find(list1[i])
    map.set(list1[i], i + idx)
  }
}

// ANSWER
console.log('later')
