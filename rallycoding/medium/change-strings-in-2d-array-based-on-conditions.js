// https://www.rallycoding.com/problems/307

// MINE
const solve = strArray => {
  let result = ''
  let directive
  let str

  for (let arr of strArray) {
    directive = arr[0]
    str = arr[1]

    if (directive === 'add') {
      result += str
    } else if (directive === 'delete') {
      const re = new RegExp(str, 'g')
      result = result.replace(re, '')
    } else {
      throw Error('directive should be add or delete.')
    }
  }

  return result
}
