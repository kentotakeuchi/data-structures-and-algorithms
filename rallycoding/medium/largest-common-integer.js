// https://www.rallycoding.com/problems/198

const solve = (arrOne, arrTwo, k) => {
  // create new array which includes common integers
  const filteredArr = arrOne.filter(num => arrTwo.includes(num))

  // sort the arr in decending order
  filteredArr.sort((a, z) => z - a)

  // return the kth largest integer
  return filteredArr[k - 1]
}
