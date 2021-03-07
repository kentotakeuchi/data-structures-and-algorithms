// https://www.rallycoding.com/problems/182

const solve = intArray => {
  const map = new Map()
  for (let num of intArray) {
    if (map.has(num)) {
      map.set(num, map.get(num) + 1)
    } else {
      map.set(num, 1)
    }
  }

  const results = []
  for (let [key, value] of map) {
    results.push(key * value)
  }

  return results.sort((a, z) => a - z)
}
