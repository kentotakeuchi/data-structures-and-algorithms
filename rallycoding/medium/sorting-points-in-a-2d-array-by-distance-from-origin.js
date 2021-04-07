// https://www.rallycoding.com/problems/282

const solve = intArray => {
  intArray.sort((a, z) => a[0] - z[0] || a[1] - z[1])
  return intArray
}
