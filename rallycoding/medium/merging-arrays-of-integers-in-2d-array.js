// https://www.rallycoding.com/problems/204

const solve = intArr => {
  // bad approach
  /*
  const results = []
  for(let arr of intArr) {
    results.push(...arr)
  }
  return results.sort((a, z) => a - z);
  */

  // still not good and built-in
  return intArr.flat().sort((a, z) => a - z)
}
