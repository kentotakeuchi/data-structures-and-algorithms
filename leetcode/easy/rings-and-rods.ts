// https://leetcode.com/problems/rings-and-rods/

// MINE: map
/*
function countPoints(r: string): number {
    const map = new Map()
    let ans = 0
    for(let i=1; i<r.length; i += 2) {
        if(map.has(r[i])) {
            const cur = map.get(r[i])
            map.set(r[i], cur.add(r[i-1]))
        } else {
            map.set(r[i], new Set(r[i-1]))
        }
    }
    for(let [k, v] of map) if(new Set(v).size === 3) ++ans
    return ans
};
*/

// ANSWER: array
function countPoints(ri: string): number {
  let ans = 0
  const r = new Array(10),
    b = new Array(10),
    g = new Array(10)
  for (let i = 0; i < ri.length; i += 2) {
    const color = ri[i],
      num = parseInt(ri[i + 1])
    if (color === 'R') r[num] = true
    else if (color === 'B') b[num] = true
    else g[num] = true
  }
  for (let i = 0; i < 10; ++i) if (r[i] && b[i] && g[i]) ++ans
  return ans
}
