// https://www.rallycoding.com/problems/281

// MINE: super inefficient
const solve = strArray => {
  for (let i = 0; i < strArray.length - 1; ++i) {
    for (let j = 0; j < strArray.length - i - 1; ++j) {
      let idx = 0
      let code1 = strArray[j].charCodeAt(idx)
      let code2 = strArray[j + 1].charCodeAt(idx)

      while (code1 === code2) {
        ++idx
        code1 = strArray[j].charCodeAt(idx)
        code2 = strArray[j + 1].charCodeAt(idx)
      }

      if (code2 < code1) {
        swap(strArray, j, j + 1)
      }
    }
  }

  console.log({ strArray })
  return strArray
}

function swap(arr, i, j) {
  ;[arr[i], arr[j]] = [arr[j], arr[i]]
}
