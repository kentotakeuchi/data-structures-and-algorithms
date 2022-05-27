// https://leetcode.com/problems/cells-in-a-range-on-an-excel-sheet/

// MINE
function cellsInRange(s: string): string[] {
  const c1 = s[0],
    r1 = parseInt(s[1]),
    c2 = s[3],
    r2 = parseInt(s[4]),
    ans = []
  const c1Code = c1.charCodeAt(0),
    c2Code = c2.charCodeAt(0)
  for (let i = c1Code; i <= c2Code; ++i) {
    let temp = String.fromCharCode(i)
    for (let j = r1; j <= r2; ++j) ans.push(`${temp}${j}`)
  }
  return ans
}

// ANSWER
