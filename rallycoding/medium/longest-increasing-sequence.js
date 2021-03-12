// https://www.rallycoding.com/problems/201

const solve = intArray => {
  // supposed to be array of the longest asc seq
  let results = []
  // store max length of seq to check if longest or not
  let maxSeq = 0
  // for readability
  const len = intArray.length

  for (let i = 0; i < len; i++) {
    let j = i + 1

    // if ascending order
    if (intArray[i] < intArray[j]) {
      // store asc numbers until not
      const temp = [intArray[i], intArray[j]]

      while (j < len) {
        // if asc
        if (intArray[j] < intArray[j + 1]) {
          temp.push(intArray[j + 1])
          ++j
        }
        // if not
        else {
          break
        }
      }

      // if current sub asc array(temp) is the longest, replace results
      if (maxSeq < temp.length) {
        maxSeq = temp.length
        results = temp
      }
    }
  }
  return results
}
