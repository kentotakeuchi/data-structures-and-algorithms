// https://www.rallycoding.com/problems/283

const solve = (intArray, direction) => {
  const rLen = intArray.length
  const cLen = intArray[0].length
  const results = []
  let count = 0

  if (direction === 'right') {
    for (let i = 0; i < cLen; ++i) {
      results.push([])

      for (let j = rLen - 1; j >= 0; --j) {
        results[count].push(intArray[j][i])
      }
      ++count
    }
    return results
  }

  if (direction === 'left') {
    for (let i = cLen - 1; i >= 0; --i) {
      results.push([])

      for (let j = 0; j < rLen; ++j) {
        results[count].push(intArray[j][i])
      }
      ++count
    }

    return results
  }

  throw Error('direction should be left or right.')
}
