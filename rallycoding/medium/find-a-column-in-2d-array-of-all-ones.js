// https://www.rallycoding.com/problems/202

const solve = intArr => {
  const rLen = intArr.length
  const cLen = intArr[0].length

  // check row
  for (let arr of intArr) {
    const set = new Set(arr)
    if (set.has(1) && set.size === 1) return true
  }

  // check column
  for (let col = 0; col < cLen; ++col) {
    const set = new Set()
    let isBreak = false

    for (let row = 0; row < rLen; ++row) {
      if (intArr[row][col] !== 1) {
        isBreak = true
        break
      } else {
        set.add(1)
      }
    }

    if (!isBreak && set.size === 1) return true
  }

  return false
}
