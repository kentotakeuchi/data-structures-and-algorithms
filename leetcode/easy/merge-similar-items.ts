// https://leetcode.com/problems/merge-similar-items/

// MINE
/*
function mergeSimilarItems(items1: number[][], items2: number[][]): number[][] {
    const shorter = items1.length <= items2.length ? items1 : items2
    const longer = items1.length > items2.length ? items1 : items2
    for(let i=0; i<shorter.length; ++i) {
        let has = false
        for(let j=0; j<longer.length; ++j) {
            if(shorter[i][0] === longer[j][0]) {
                longer[j][1] += shorter[i][1]
                has = true
                break
            }
        }
        if(!has) longer.push(shorter[i])
    }
    longer.sort((a, z) => a[0] - z[0])
    return longer
};
*/

// MINE2
function mergeSimilarItems(items1: number[][], items2: number[][]): number[][] {
  // const map = new Map(items1) // idk why it doesn't work
  const map = new Map()
  for (let itm of items1) map.set(itm[0], itm[1])
  for (let itm of items2) map.set(itm[0], map.get(itm[0]) + itm[1] || itm[1])
  return [...map].sort((a, z) => a[0] - z[0])
}

// ANSWER
