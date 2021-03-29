// https://www.rallycoding.com/problems/263

// solution1: inefficient + built-in
/*
const solve = (arrOne, arrTwo) => {
  return ([...new Set([...arrOne, ...arrTwo])]).sort((a, z) => a - z)
}
*/

// solution2: *execution timeout
const solve = (arrOne, arrTwo) => {
  return mergeSort([...arrOne, ...arrTwo])
}

const mergeSort = arr => {
  if (arr.length === 1) return arr

  const mid = Math.floor(arr.length / 2)

  const left = arr.slice(0, mid)
  const right = arr.slice(mid)

  return merge(mergeSort(left), mergeSort(right))
}

function merge(left, right) {
  const results = []
  const cache = new Map()

  while (left.length && right.length) {
    if (left[0] < right[0]) {
      if (cache.has(left[0])) continue
      results.push(left.shift())
      cache.set(left[0], true)
    } else {
      if (cache.has(right[0])) continue
      results.push(right.shift())
      cache.set(right[0], true)
    }
  }

  console.log({ results, cache })

  return [...results, ...left, ...right]
}
